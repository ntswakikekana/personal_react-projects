import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "../styles/AddTask.css";

export default function AddTask({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <form className="add-task-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}
