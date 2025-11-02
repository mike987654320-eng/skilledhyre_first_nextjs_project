import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Basic CORS for local development
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.get("/", (req, res) => {
  res.send("Backend API is running!");
});

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Dummy products data
const dummyProducts = [
  { id: "p1", name: "Basic Tee", description: "Soft cotton tee", price: 19.99 },
  { id: "p2", name: "Hoodie", description: "Cozy fleece hoodie", price: 49.99 },
  { id: "p3", name: "Cap", description: "Adjustable baseball cap", price: 14.99 },
];

// Products API route
app.get("/api/products", (req, res) => {
  res.status(200).json({ products: dummyProducts });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
