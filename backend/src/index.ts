import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import habitRoutes from "./routes/habits";
import connectDB from "./connectDB";

dotenv.config(); // Load environment variables from .env file
connectDB() // Connect to MongoDB
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Simulation
const habits = [
  { id: 1, name: "Do exercises", done: false },
  { id: 2, name: "Drink water", done: true },
  { id: 3, name: "Read 10 min", done: false },
];

app.use("/api/habits", habitRoutes); // Use the habits routes

app.get("/api/habits", (req, res) => {
    res.json(habits);
}); // Use the habits routes

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
