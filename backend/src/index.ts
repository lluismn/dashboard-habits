import express from "express"
import cors from "cors";
import dotenv from "dotenv";

import habitRoutes from "./routes/habits";

dotenv.config();  // Load environment variables from .env file
const app = express();
const PORT = process.env.PORT || 4000; 

app.use(cors());  // Enable CORS for all routes
app.use(express.json());
app.use('/api/habits', habitRoutes);  // Use the habits routes

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})