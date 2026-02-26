import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate();
  function redirectTaskClick(task) {
    const query = new URLSearchParams()
    query.set("title", task.title)
    query.set("description", task.description)
    navigate(`/tasks?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          
          <button 
            onClick={() => onTaskClick(task.id)} 
            className={`bg-slate-400 w-full text-left text-white p-2 rounded-md ${task.completed ? 'line-through' : ''}`}
          > 
            {task.title}
          </button>
          
          <button onClick={() => redirectTaskClick(task)} className="bg-slate-400 text-white p-2 rounded-md">
            <ChevronRightIcon />
          </button>

          <button 
            onClick={() => onTaskDelete(task.id)}
            className="bg-slate-400 text-white p-2 rounded-md"
          > 
            <Trash /> 
          </button>
          
        </li>
      ))}
    </ul>
  );
}

export default Tasks;