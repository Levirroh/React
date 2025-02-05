import { ChevronRightIcon, Trash2, TrashIcon } from "lucide-react";

function Tasks({tasks, onTaskClick, TaskDelete}){
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                <button
                 onClick={() => onTaskClick(task.id)} 
                 className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${task.isCompleted && "line-through"}`}
                 > 
                    {task.title}
                </button> 
                <button className="bg-slate-400 p-2 rounded-md text-white">
                    <ChevronRightIcon/>
                </button>
                <button onClick={() => TaskDelete(task.id)} className="bg-slate-400 p-2 rounded-md text-white">
                    <Trash2 />
                </button>
                </li>
        ))}</ul>
    );
}

export default Tasks;
