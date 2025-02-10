import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";

export default function TodoItem({ task, setTasks }) {
  const removeTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -10 }}
      className="flex justify-between items-center p-3 bg-orange-100 rounded-lg shadow"
    >
      <span>{task.text}</span>
      <button
        onClick={() => removeTask(task.id)}
        className="text-red-500 hover:text-red-700 transition-all"
      >
        <FaTrash />
      </button>
    </motion.li>
  );
}
