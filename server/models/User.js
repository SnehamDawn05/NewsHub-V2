// server/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true }, // Firebase UID
  name: { type: String },
  email: { type: String, required: true },
  savedArticles: [
    {
      title: String,
      url: String,
      source: String,
      publishedAt: String,
    },
  ],
});

export default mongoose.model("User", userSchema);
