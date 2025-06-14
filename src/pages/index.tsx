import { habitsMock } from "@/data/habits";
import { Habit } from "@/types/habit";

export default function Home() {
  return (
    <>
      <div style={{ padding: "2rem" }}>
        <h1 style={{ marginBottom: "1rem" }}>Dashboard of habits</h1>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "1rem", justifyContent: "center"}}
        >
          {habitsMock.map((habit: Habit) => (
            <div
              key={habit.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                marginBottom: "1rem",
                backgroundColor: habit.done ? "#dcedc8" : "#fff",
                width: "300px",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                boxShadow: "1px 5px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2>{habit.name}</h2>
              <p>{habit.description}</p>
              <p>Status: {habit.done ? "Completed" : "Pending"}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
