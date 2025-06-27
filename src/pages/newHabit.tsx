import { Habit } from "@/types/habit";
import { useState, CSSProperties } from "react";
import HabitForm from "./components/HabitForm";
import { useRouter } from "next/router";

export default function NewHabit() {
  const router = useRouter();
  const [habits, setHabits] = useState<Habit[]>([]);
  const addHabit = (habit: Habit) => {
    setHabits((prev) => [...prev, habit]); // Add the new habit to the list
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
