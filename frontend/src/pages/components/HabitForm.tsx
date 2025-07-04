import { Habit } from "@/types/habit";
import { useRouter } from "next/router";
import { CSSProperties, useState } from "react";

interface HabitFormProps {
  onAddHabit: (habit: Habit) => void; // Function to handle adding a new habit
}

export default function HabitForm({ onAddHabit }: HabitFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !description.trim()) return; // Ensure both fields are filled

    const newHabit: Habit = {
      id: crypto.randomUUID(), // Generate a unique ID
      name: name.trim(),
      description: description.trim(),
      done: false, // New habits are initially not done
    };

    onAddHabit(newHabit); // Call the function to add the new habit
    setName(""); // Clear the name input
    setDescription(""); // Clear the description input
    router.push("/"); // Redirect to the home page after adding the habit
  };
  return (
    <div style={styles.wrapper}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>New Habit</h2>
        <div style={styles.divForm}>
          <input
            type="text"
            placeholder="Name of the habit"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
          <textarea
            placeholder="Description of the habit"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={3}
            style={styles.input}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0.5rem",
            }}
          >
            <button type="submit" style={styles.button}>
              Add habit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "2rem",
  },
  form: {
    marginBottom: "2rem",
    maxWidth: "50%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  divForm: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.5rem",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontFamily: "Arial, sans-serif",
  },
  button: {
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
