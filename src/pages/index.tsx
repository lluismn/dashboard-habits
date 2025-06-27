import { habitsMock } from "@/data/habits";
import { Habit } from "@/types/habit";
import { CSSProperties, useState } from "react";
import HabitCard from "./components/HabitCard";
import HabitForm from "./components/HabitForm";
import { useRouter } from "next/router";


export default function Home() {
  const [habits, setHabits] = useState<Habit[]>(habitsMock);
  const router = useRouter();

  const toggleDone = (id: string) => {
    const newHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, done: !habit.done } : habit
    );
    setHabits(newHabits);
  };

  const onClickForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push("/newHabit");
  };



  return (
    <>
      <div style={{ padding: "2rem" }}>
        <div style={styles.upper}>
          <h1 style={{ marginBottom: "1rem" }}>Dashboard of habits</h1>
          <button onClick={onClickForm} style={styles.buttonForm}>
            New Habit
          </button>
        </div>
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

const styles: Record<string, CSSProperties> = {
  upper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
    marginRight: "3rem",
  },
  buttonForm: {
    padding: "0.5rem 1rem",
    backgroundColor: "#0070f3",
    color: "#fff",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    width: "fit-content",
    boxShadow: "1px 5px 4px rgba(0, 0, 0, 0.1)",
  }
}