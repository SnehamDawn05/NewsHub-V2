// server/routes/news.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Fetch news by category
router.get("/", async (req, res) => {
  const category = req.query.category || "general";
  const apiKey = process.env.NEWS_API_KEY;

  console.log("🟡 Fetching news for:", category);
  console.log("🟡 Using API key:", apiKey ? "Exists" : "Missing");

  try {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    console.log("🔵 Request URL:", url);

    const response = await axios.get(url);
    console.log("🟢 News fetched:", response.data.articles.length);

    res.json(response.data.articles);
  } catch (error) {
    console.error("❌ Error fetching news:", error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
