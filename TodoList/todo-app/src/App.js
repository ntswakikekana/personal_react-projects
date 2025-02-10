import { useState } from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import "./styles/App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <h2>Manage Your Tasks</h2>
        <AddTask onAdd={addTask} />
        <TodoList tasks={tasks} onRemove={removeTask} />
      </div>
    </div>
  );
}
