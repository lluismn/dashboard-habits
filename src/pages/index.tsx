import { habitsMock } from "@/data/habits";
import { Habit } from "@/types/habit";
import { useState } from "react";
import HabitCard from "./components/HabitCard";

export default function Home() {
  const [habits, setHabits] = useState<Habit[]>(habitsMock);

  const toggleDone = (id: string) => {
    const newHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, done: !habit.done } : habit
    );
    setHabits(newHabits);
  };

  return (
    <>
      <div style={{ padding: "2rem" }}>
        <h1 style={{ marginBottom: "1rem" }}>Dashboard of habits</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          {habits.map((habit) => (
            <HabitCard key={habit.id} habit={habit} onToggle={toggleDone} />
          ))}
        </div>
      </div>
    </>
  );
}
