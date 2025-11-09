import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.get("/", async (req, res) => {
  const category = req.query.category || "general";
  const apiKey = process.env.NEWS_API_KEY;

  console.log("🟡 Category:", category);
  console.log("🟡 API key exists?", !!apiKey);

  const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;
  console.log("🔵 Fetching:", url);

  try {
    const { data } = await axios.get(url);
    console.log("🟢 News count:", data.articles?.length);
    res.json(data.articles);
  } catch (err) {
    console.error("❌ News fetch error:", err.response?.status, err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;
