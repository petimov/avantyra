import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import passport from "passport";
import session from "express-session";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import MongoStore from "connect-mongo";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// --- Middleware ---
app.use(express.json());

// CORS: allow frontend domain + credentials
const FRONTEND_URL = process.env.FRONTEND_URL || "https://avantyra.vercel.app";
app.use(cors({
    origin: FRONTEND_URL,
    credentials: true
}));

// Session with MongoStore for production
const sessionConfig = {
    secret: process.env.SESSION_SECRET || "fallback-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    }
};

// Use MongoStore for session storage in production
if (process.env.NODE_ENV === "production" && process.env.MONGO_URI) {
    sessionConfig.store = MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        ttl: 14 * 24 * 60 * 60 // 14 days
    });
}

app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());

// --- Mongoose schema ---
const MenuItemSchema = new mongoose.Schema({
    category: { type: String, required: true },
    name: { type: String, required: true },
    gram: { type: String, default: "" },
    price: { type: String, required: true },
}, {
    timestamps: true
});

const MenuItem = mongoose.model("MenuItem", MenuItemSchema);

// --- Passport Google OAuth ---
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
    // Check if the authenticated user is the admin
    if (profile.emails && profile.emails[0].value === process.env.ADMIN_EMAIL) {
        return done(null, profile);
    }
    return done(null, false, { message: "Not authorized" });
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

// --- OAuth routes ---
app.get("/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
        prompt: "select_account"
    })
);

app.get("/auth/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/auth/failure",
        failureMessage: true
    }),
    (req, res) => {
        res.send(`<script>
            window.opener.postMessage({ 
                type: 'oauth-success', 
                user: true 
            }, "${FRONTEND_URL}");
            window.close();
        </script>`);
    }
);

app.get("/auth/failure", (req, res) => {
    res.send(`<script>
        window.opener.postMessage({ 
            type: 'oauth-failure', 
            error: "Login failed" 
        }, "${FRONTEND_URL}");
        window.close();
    </script>`);
});

// --- Auth middleware ---
function ensureAuth(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(401).json({ error: "Unauthorized" });
}

// --- API routes ---
app.get("/api/me", (req, res) => {
    res.json({
        user: req.user ? {
            id: req.user.id,
            displayName: req.user.displayName,
            email: req.user.emails?.[0]?.value
        } : null
    });
});

app.get("/api/menu", async (req, res) => {
    try {
        const items = await MenuItem.find().sort({ category: 1, name: 1 });
        const grouped = items.reduce((acc, item) => {
            if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push(item);
            return acc;
        }, {});
        res.json(grouped);
    } catch (err) {
        console.error("Error fetching menu:", err);
        res.status(500).json({ error: "Failed to fetch menu" });
    }
});

app.post("/api/menu", ensureAuth, async (req, res) => {
    try {
        const { category, name, gram, price } = req.body;

        if (!category || !name || !price) {
            return res.status(400).json({ error: "Category, name, and price are required" });
        }

        const item = new MenuItem({
            category: category.trim(),
            name: name.trim(),
            gram: gram?.trim() || "",
            price: price.trim()
        });

        await item.save();
        res.status(201).json(item);
    } catch (err) {
        console.error("Error creating menu item:", err);
        res.status(400).json({ error: err.message });
    }
});

app.put("/api/menu/:id", ensureAuth, async (req, res) => {
    try {
        const updatedItem = await MenuItem.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ error: "Item not found" });
        }

        res.json(updatedItem);
    } catch (err) {
        console.error("Error updating menu item:", err);
        res.status(400).json({ error: err.message });
    }
});

app.delete("/api/menu/:id", ensureAuth, async (req, res) => {
    try {
        const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);

        if (!deletedItem) {
            return res.status(404).json({ error: "Item not found" });
        }

        res.json({ success: true, message: "Item deleted successfully" });
    } catch (err) {
        console.error("Error deleting menu item:", err);
        res.status(500).json({ error: "Failed to delete item" });
    }
});

// Logout
app.post("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error("Logout error:", err);
            return res.status(500).json({ error: "Logout failed" });
        }

        req.session.destroy((err) => {
            if (err) {
                console.error("Session destruction error:", err);
                return res.status(500).json({ error: "Logout failed" });
            }

            res.clearCookie("connect.sid");
            res.json({ success: true, message: "Logged out successfully" });
        });
    });
});

// Health check endpoint
app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || "development"
    });
});

// --- Serve React frontend in production ---
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "build", "index.html"));
    });
}

// --- Connect to MongoDB and start server ---
const PORT = process.env.PORT || 4000;

// MongoDB connection with better error handling
const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI environment variable is required");
        }

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1);
    }
};

// Graceful shutdown
process.on("SIGINT", async () => {
    console.log("Shutting down gracefully...");
    await mongoose.connection.close();
    process.exit(0);
});

// Start server
const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`✅ Server running on port ${PORT}`);
            console.log(`✅ Environment: ${process.env.NODE_ENV || "development"}`);
        });
    } catch (error) {
        console.error("❌ Failed to start server:", error);
        process.exit(1);
    }
};

startServer();