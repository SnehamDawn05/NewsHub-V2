import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";

export default function Saved() {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("saved")) || [];
    setSavedArticles(saved);
  }, []);

  const handleRemove = (index) => {
    const updated = savedArticles.filter((_, i) => i !== index);
    setSavedArticles(updated);
    localStorage.setItem("saved", JSON.stringify(updated));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Saved Articles</h2>
      {savedArticles.length === 0 ? (
        <p>No saved articles yet.</p>
      ) : (
        savedArticles.map((a, i) => (
          <div key={i} className="relative mb-6 border-b pb-4">
            <NewsCard article={a} />
            <button
              onClick={() => handleRemove(i)}
              className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
