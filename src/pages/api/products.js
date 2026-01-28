import { connectToDatabase } from "../../utils/db";
import Product from "../../models/Product";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "GET") {
    const products = await Product.find({});
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    const { name, description, price } = req.body;
    const product = new Product({ name, description, price });
    await product.save();
    return res.status(201).json(product);
  }

  res.status(405).json({ message: "Method not allowed" });
}
