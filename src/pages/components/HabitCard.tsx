import { Habit } from "@/types/habit";

interface HabitCardProps {
  habit: Habit;
  onToggle: (id: string) => void;
}

export default function HabitCard({ habit, onToggle }: HabitCardProps) {
  return (
    <div
      key={habit.id}
      style={{
        border: "1.1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        backgroundColor: habit.done ? "#dcedc8" : "#fff",
        width: "300px",
        minHeight: "140px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "0.5rem",
        boxShadow: "1px 5px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          flexGrow: 1,
        }}
      >
        <h2>{habit.name}</h2>
        <p>{habit.description}</p>
        <p>Status: {habit.done ? "Completed" : "Pending"}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => onToggle(habit.id)}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "fit-content",
            minWidth: "148px",
          }}
        >
          {habit.done ? "Mark as Pending" : "Mark as Completed"}
        </button>
      </div>
    </div>
  );
}
