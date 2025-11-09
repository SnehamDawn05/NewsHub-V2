import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Navbar({ user }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center p-4 dark:bg-gray-800">
      <h1 className="text-2xl font-bold">🗞️ NewsHub</h1>
      <div className="flex space-x-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/saved">Saved</Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-700 px-3 py-1 rounded"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        {user ? (
          <button
            className="bg-red-500 px-3 py-1 rounded"
            onClick={() => signOut(auth)}
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="bg-blue-500 px-3 py-1 rounded">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
