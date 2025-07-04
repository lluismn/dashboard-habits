import { Habit } from "@/types/habit";
import { CSSProperties } from "react";
import styles from '@/styles/HabitCard.module.css'

interface HabitCardProps {
  habit: Habit;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function HabitCard({ habit, onToggle, onDelete }: HabitCardProps) {
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
        gap: "1rem",
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>{habit.name}</h2>
          <button
            onClick={() => onDelete(habit.id)}
            className={styles.deleteButton}
          >
            X
          </button>
        </div>
        <p>{habit.description}</p>
        <p>Status: {habit.done ? "Completed" : "Pending"}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => onToggle(habit.id)} style={localStyles.button}>
          {habit.done ? "Mark as Pending" : "Mark as Completed"}
        </button>
      </div>
    </div>
  );
}

const localStyles: Record<string, CSSProperties> = {
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    width: "fit-content",
    minWidth: "148px",
  },
};
