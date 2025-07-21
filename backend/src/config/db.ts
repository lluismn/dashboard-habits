import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/habits")
        console.log("MongoDB connected successfully")
    } catch (err) {
        console.error("Error connecting to MongoDB:", err)
        process.exit(1) // Exit the process with failure
    }
}