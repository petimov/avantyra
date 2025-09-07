import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import passport from "passport";
import session from "express-session";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import fs from 'fs';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// --- Middlewares ---
app.use(cors({
    origin: [
        "http://localhost:3000",        // React dev
        "https://avantyra.vercel.app"   // production frontend
    ],
    credentials: true
}));
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        sameSite: "none",
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
    }
}));

app.use(passport.initialize());
app.use(passport.session());

// --- Mongoose schema ---
const MenuItemSchema = new mongoose.Schema({
    category: { type: String, required: true },
    name: { type: String, required: true },
    gram: { type: String, default: "" },
    price: { type: String, required: true },
});
const MenuItem = mongoose.model("MenuItem", MenuItemSchema);

// --- Passport Google OAuth ---
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
}, (accessToken, refreshToken, profile, done) => {
    const adminEmail = process.env.ADMIN_EMAIL;
    if (profile.emails[0].value === adminEmail) return done(null, profile);
    return done(null, false);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// --- OAuth routes ---
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/auth/failure" }),
    (req, res) => {
        res.send(`<script>
            window.opener.postMessage({ user: true }, "*");
            window.close();
        </script>`);
    }
);

app.get("/auth/failure", (req, res) => res.send("Login Failed"));

// --- Auth check middleware ---
function ensureAuth(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(401).json({ error: "Unauthorized" });
}

// --- API routes ---
app.get("/api/me", (req, res) => {
    res.json({ user: req.user || null });
});

app.get("/api/menu", async (req, res) => {
    try {
        const items = await MenuItem.find();
        const grouped = items.reduce((acc, item) => {
            if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push(item);
            return acc;
        }, {});
        res.json(grouped);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/api/menu", ensureAuth, async (req, res) => {
    try {
        const item = new MenuItem(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.delete("/api/menu/:id", ensureAuth, async (req, res) => {
    try {
        const deleted = await MenuItem.findByIdAndDelete(req.params.id);
        if (deleted) res.json({ success: true });
        else res.status(404).json({ success: false });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Logout route
app.get("/logout", (req, res) => {
    req.logout(err => {
        if (err) return res.status(500).json({ error: "Logout failed" });
        req.session.destroy(() => {
            res.clearCookie("connect.sid");
            res.json({ success: true });
        });
    });
});

console.log("Build folder exists:", fs.existsSync(buildPath));

// Serve React in production if needed
// Add this after your API routes but before the React catch-all
if (process.env.NODE_ENV === "production") {
    const buildPath = path.join(__dirname, "build");

    // Serve static files correctly
    app.use(express.static(buildPath, {
        setHeaders: (res, path) => {
            // Set proper MIME type for JS files
            if (path.endsWith('.js')) {
                res.setHeader('Content-Type', 'application/javascript');
            }
        }
    }));

    // Catch-all for React Router paths - should be the last route
    app.get("*", (req, res) => {
        res.sendFile(path.join(buildPath, "index.html"));
    });
}

// --- Connect to MongoDB and start server ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ DB connected");
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
    })
    .catch(err => console.log("❌ DB connection error:", err));
