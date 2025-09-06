import React, { useState, useEffect } from "react";
import './AdminDashboard.css';

function AdminDashboard() {
    const [user, setUser] = useState(null); // null = loading, false = failed, object = logged in
    const [menu, setMenu] = useState({});
    const [categories, setCategories] = useState([]);
    const [newItem, setNewItem] = useState({ category: "", name: "", price: "" });
    const [newCategory, setNewCategory] = useState("");

    // Use dynamic backend URL
    const API_URL = process.env.NODE_ENV === "production"
        ? "https://avantyra.onrender.com/"
        : "http://localhost:4000";

    // Fetch logged-in user on mount
    useEffect(() => {
        fetch(`${API_URL}/api/me`, { credentials: "include" })
            .then(res => res.json())
            .then(data => setUser(data.user ? data.user : false))
            .catch(() => setUser(false));
    }, [API_URL]);

    // Fetch menu if logged in
    useEffect(() => {
        if (!user || user === false) return;
        fetch(`${API_URL}/api/menu`, { credentials: "include" })
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setCategories(Object.keys(data));
            })
            .catch(err => console.error("Error fetching menu:", err));
    }, [user, API_URL]);

    // Add new menu item
    function addItem() {
        let categoryToUse = newItem.category;
        if (newItem.category === "__new__") {
            if (!newCategory.trim()) return alert("Zadejte název kategorie");
            categoryToUse = newCategory.trim();
        }
        if (!newItem.name || !newItem.price) return alert("Zadejte název a cenu");

        fetch(`${API_URL}/api/menu`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ ...newItem, category: categoryToUse })
        })
            .then(res => res.json())
            .then(data => {
                setMenu(prev => ({
                    ...prev,
                    [data.category]: prev[data.category] ? [...prev[data.category], data] : [data]
                }));
                if (!categories.includes(data.category)) setCategories(prev => [...prev, data.category]);
                setNewItem({ category: "", name: "", price: "" });
                setNewCategory("");
            })
            .catch(err => console.error("Chyba při přidávání položky:", err));
    }

    // Delete menu item
    function deleteItem(id, category) {
        fetch(`${API_URL}/api/menu/${id}`, { method: "DELETE", credentials: "include" })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    setMenu(prev => ({
                        ...prev,
                        [category]: prev[category].filter(item => item._id !== id)
                    }));
                }
            })
            .catch(err => console.error("Chyba při mazání položky:", err));
    }

    // Open Google login popup
    function openGoogleLogin() {
        const width = 500, height = 600;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;

        const popup = window.open(
            `${API_URL}/auth/google`,
            "Google Login",
            `width=${width},height=${height},top=${top},left=${left}`
        );

        const timer = setInterval(() => {
            try {
                if (popup.closed) {
                    clearInterval(timer);
                    fetch(`${API_URL}/api/me`, { credentials: "include" })
                        .then(res => res.json())
                        .then(data => setUser(data.user ? data.user : false))
                        .catch(() => setUser(false));
                }
            } catch (err) { }
        }, 500);
    }

    // Logout
    function logout() {
        fetch(`${API_URL}/logout`, { credentials: "include" })
            .then(() => setUser(null))
            .catch(() => setUser(false));
    }

    // Loading state
    if (user === null) return <p>Načítání...</p>;

    // Login screen
    if (!user) {
        return (
            <div className="admin-login">
                <h1>Přihlášení</h1>
                <button onClick={openGoogleLogin}>Přihlásit se pomocí Google</button>
            </div>
        );
    }

    // Admin dashboard
    return (
        <div className="admin-content">
            <h1>Správa menu</h1>
            <button onClick={logout}>Odhlásit se</button>

            <div className="admin-form">
                <select
                    value={newItem.category}
                    onChange={e => setNewItem({ ...newItem, category: e.target.value })}
                >
                    <option value="">Vybrat kategorii</option>
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    <option value="__new__">+ Přidat novou kategorii</option>
                </select>

                {newItem.category === "__new__" && (
                    <input
                        type="text"
                        placeholder="Nová kategorie"
                        value={newCategory}
                        onChange={e => setNewCategory(e.target.value)}
                    />
                )}

                <input
                    type="text"
                    placeholder="Název položky"
                    value={newItem.name}
                    onChange={e => setNewItem({ ...newItem, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Cena"
                    value={newItem.price}
                    onChange={e => setNewItem({ ...newItem, price: e.target.value })}
                />
                <button onClick={addItem}>Přidat položku</button>
            </div>

            {Object.entries(menu).map(([category, items]) => (
                <div key={category} className="admin-menu-category">
                    <h2>{category}</h2>
                    <ul className="admin-menu-list">
                        {items.map(item => (
                            <li key={item._id}>
                                {item.name} - {item.price},-
                                <button onClick={() => deleteItem(item._id, category)}>Odstranit</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default AdminDashboard;
