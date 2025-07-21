import express from "express";
import { Habit } from "../models/Habit";

const router = express.Router();

router.get("/", async (_req, res) => {
  const habits = await Habit.find();
  res.json(habits);
});

export default router;
