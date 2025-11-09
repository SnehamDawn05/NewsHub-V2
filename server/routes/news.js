import express from "express";
import axios from "axios";
import dotenv from "dotenv";

// ✅ Load .env only in development (prevents overwriting Render's env vars)
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const router = express.Router();

// ✅ Log once to verify the API key presence in Render logs
console.log("🔑 NEWS_API_KEY present:", !!process.env.NEWS_API_KEY);

// ✅ Fetch news by category
router.get("/:category", async (req, res) => {
  const category = req.params.category || "general";

  try {
    // Build the request URL
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`;
    console.log("📡 Fetching from:", url);

    const response = await axios.get(url);

    console.log("📰 Articles fetched:", response.data.articles?.length || 0);

    // Send the articles to the frontend
    res.json(response.data.articles);
  } catch (error) {
    console.error("❌ Error fetching news:", error.message);
    res.status(500).json({ message: "Failed to fetch news" });
  }
});

export default router;
