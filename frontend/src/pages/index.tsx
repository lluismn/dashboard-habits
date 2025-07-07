import { habitsMock } from "@/data/habits";
import { Habit } from "@/types/habit";
import { CSSProperties, useEffect, useState } from "react";
import HabitCard from "./components/HabitCard";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [filtro, setFiltro] = useState<'all' | 'done' | 'pending'>('all'); // State to manage the filter. I used spanish term 'filtro' for consistency with code.
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/habits').then((res) => res.json()).then((data) => {
      setHabits(data);
      localStorage.setItem("habits", JSON.stringify(data)); // Store fetched habits in localStorage
    }).catch((err) => {
      console.error("Error fetching habits:", err);
    })
  })

  const toggleDone = (id: string) => {
    const newHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, done: !habit.done } : habit
    );
    setHabits(newHabits);
  };

  const deleteHabit = (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this habit?"
    );
    if (!confirmDelete) return; // If the user cancels, do nothing
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  const filterHabits = habits.filter((habit) => {
    if (filtro === 'done') return habit.done;
    if (filtro === 'pending') return !habit.done;
    return true; // If 'all', return all habits
  })

  const onClickForm = (e: { preventDefault: () => void }) => {
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
        <div style={{ marginLeft: '1rem', marginBottom: "1rem" }}>
          <label style={{ marginRight: '0.5rem'}}>Filter:</label>
          <select value={filtro} onChange={(e) => setFiltro(e.target.value as any)}>
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p>
            Progress: {habits.filter((h) => h.done).length} / {habits.length}{" "}
            done
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {habits.length === 0 ? (
              <p style={{ textAlign: "center", width: "100%" }}>
                No habits found. Please add a new habit.
              </p>
            ) : (
              filterHabits.map((habit) => (
                <HabitCard
                  key={habit.id}
                  habit={habit}
                  onToggle={toggleDone}
                  onDelete={deleteHabit}
                />
              ))
            )}
          </div>
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
  },
};
