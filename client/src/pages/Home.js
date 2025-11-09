import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import CategorySelector from "../components/CategorySelector";

export default function Home({ user }) {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  useEffect(() => {
    axios
      .get(`${API_URL}/api/news/${category}`)
      .then((res) => setArticles(res.data))
      .catch((err) => console.error("Error fetching news:", err));
  }, [category, API_URL]);

  const handleSave = (article) => {
    if (!user) {
      alert("Please log in to save articles.");
      return;
    }
    let saved = JSON.parse(localStorage.getItem("saved")) || [];
    saved.push(article);
    localStorage.setItem("saved", JSON.stringify(saved));
    alert("Article saved!");
  };

  return (
    <div className="p-4">
      <CategorySelector category={category} setCategory={setCategory} />
      {articles.length === 0 ? (
  <p className="text-center mt-6 text-gray-600">No news found.</p>
) : (
  <div className="divide-y-2 divide-gray-300">
    {articles.map((a, i) => (
      <div key={i} className="py-6">
        <NewsCard article={a} onSave={handleSave} />
      </div>
    ))}
  </div>
)}

    </div>
  );
}
