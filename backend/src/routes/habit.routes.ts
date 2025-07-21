import express from 'express';
import { Habit } from '../models/habits.model';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const habits = await Habit.find();
        res.json(habits);
    } catch (error) {
        console.error(`Error fetching habits: ${error}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

export default router;