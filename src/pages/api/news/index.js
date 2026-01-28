import { connectToDatabase } from "../../../utils/db";
import News from "../../../models/News";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "GET") {
    try {
      console.log("Connected to MongoDB , logging");

      const newsList = await News.find({}).sort({ createdAt: -1 });
      return res.status(200).json(newsList);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch news" });
    }
  }

  if (req.method === "POST") {
    try {
      const newsItem = await News.create(req.body);
      return res.status(201).json(newsItem);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to create news" });
    }
  }

  res.status(405).json({ message: "Method not allowed" });
}
