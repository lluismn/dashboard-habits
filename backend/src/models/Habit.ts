import mongoose from "mongoose";

const HabitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  done: { type: Boolean, default: false },
});

export const Habit = mongoose.model("Habit", HabitSchema);
