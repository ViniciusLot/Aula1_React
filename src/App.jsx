import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4} from "uuid";  

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
   );

useEffect(() => {
localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

//useEffect com vazio ao lado, executa apenas uma vez quando a aplicação é carregada

useEffect(() => {
  async function fetchTasks() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {method: "GET"});
    const data = await response.json();
    setTasks(data);
  }
  // fetchTasks(); Se quiser carregar as tarefas da API, descomente essa linha.
}, []);

function onTaskClick(taskId) {
  const newTasks = tasks.map((task) => {
    if (task.id === taskId) {
      return {...task, completed: !task.completed};
    }
    return task;
  });
  setTasks(newTasks);
}

function onTaskDelete(taskId) {
  const newTasks = tasks.filter((task) => task.id !== taskId);
  setTasks(newTasks);
}

function onTaskAdd(title, description) {
  const newTask = {
    id: v4(),
    title,
    description,
    completed: false
  };
  setTasks([...tasks, newTask]);
}
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-slate-100 text-3xl text-center font-bold">Gerenciador de Tarefas</h1>
        <AddTask onTaskAdd={onTaskAdd} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete} /> 
      </div>
    </div>
  );
}

export default App;
