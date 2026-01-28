import { connectToDatabase } from "../../../utils/db";
import Blog from "../../../models/Blog";

export default async function handler(req, res) {
  await connectToDatabase();
  console.log("Connected to MongoDB");
  // console.log("req ", req, " res ", res);

  if (req.method === "GET") {
    try {
      const blogs = await Blog.find({}).sort({ createdAt: -1 });

      return res.status(200).json(blogs);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch blogs" });
    }
  }

  if (req.method === "POST") {
    try {
      const blog = await Blog.create(req.body);
      return res.status(201).json(blog);
    } catch (error) {
      return res.status(500).json({ error: "Failed to create blog" });
    }
  }

  res.status(405).json({ message: "Method not allowed" });
}
