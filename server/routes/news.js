// server/routes/news.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Fetch news by category
router.get("/:category", async (req, res) => {
  const category = req.params.category || "general";
  try {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.NEWS_API_KEY}`;
    console.log("Fetching from:", url);
    const response = await axios.get(
  `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`
);

    console.log("Articles fetched:", response.data.articles.length);
    res.json(response.data.articles);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ message: "Failed to fetch news" });
  }
});
export default router;
