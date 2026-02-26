import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <div className = "flex justify-center relative"> 
        <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 mb-6 text-slate-100">
            <ChevronLeftIcon />
        </button>
        <h1 className="text-slate-100 text-3xl text-center font-bold">Detalhes da Tarefa</h1>
        </div>
        <div className="bg-slate-100 p-4 rounded-md shadow">
          <h2 className="text-xl text-slate-800  font-bold">{title}</h2>
          <p className="text-slate-800">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;