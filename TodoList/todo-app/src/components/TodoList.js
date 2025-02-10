import { FaTrash } from "react-icons/fa";
import "../styles/TodoList.css";

export default function TodoList({ tasks, onRemove }) {
  return (
    <div className="todo-container">
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id}>
              {task.text}
              <FaTrash className="trash-icon" onClick={() => onRemove(task.id)} />
            </li>
          ))
        ) : (
          <p className="no-tasks">No tasks yet. Add one!</p>
        )}
      </ul>
    </div>
  );
}
