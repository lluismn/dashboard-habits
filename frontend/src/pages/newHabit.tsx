import { Habit } from "@/types/habit";
import { useState, CSSProperties } from "react";
import HabitForm from "./components/HabitForm";
import { useRouter } from "next/router";

export default function NewHabit() {
  const router = useRouter();
  const addHabit = (habit: Habit) => {
    const stored = localStorage.getItem("habits");  // Try to get habits from localStorage
    const currentHabits: Habit[] = stored ? JSON.parse(stored) : [];  // If found, parse it; otherwise, use an empty array

    const updatedHabits = [...currentHabits, habit];  // Add the new habit to the existing ones

    localStorage.setItem("habits", JSON.stringify(updatedHabits));  // Store updated habits in localStorage
  };

  const handleBack = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push("/"); // Navigate back to the home page
  };
  return (
    <div style={styles.wrapper}>
      <HabitForm onAddHabit={addHabit} />
      <button onClick={handleBack} style={styles.button}>
        Back to Dashboard
      </button>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "2rem",
    width: "100%",
    height: "100vh",
  },
  button: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
