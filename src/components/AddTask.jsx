import { useState } from "react";

function AddTask({ onTaskAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return(
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input type="text" placeholder="Título da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={title} onChange={(event) => setTitle(event.target.value)}
      />
      <input type="text" placeholder="Descrição da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={description} onChange={(event) => setDescription(event.target.value)}
      />
      <button className="bg-slate-400 text-white p-2 rounded-md font-medium" 
      onClick={() => {
        if (!title.trim() || !description.trim()) {
          alert("Por favor, preencha o título e a descrição da tarefa.");
          return;
        }
      onTaskAdd(title, description); setTitle(""); setDescription("")}}
      > Adicionar Tarefa </button>
    </div>
  );
}

export default AddTask;