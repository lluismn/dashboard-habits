import mongoose from "mongoose";

const HabitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  done: { type: Boolean, default: false },
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

export const Habit = mongoose.model("Habit", HabitSchema);
