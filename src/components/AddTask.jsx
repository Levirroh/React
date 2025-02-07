import { useState } from "react";
import Input from "./Input"

function AddTask({addTaskSubmit}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return(
        <div className="space-y-4 bg-slate-200 p-6 rounded-md shadow flex flex-col">
            <Input type="text" 
                placeholder="Digite o título da tarefa" 
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <Input type="text" 
                placeholder="Digite a descrição da tarefa" 
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
                <button onClick={() => {
                    if (!description.trim() || !title.trim()){
                        return alert("Insira valores válidos")
                    } else{
                        addTaskSubmit(title, description)
                        setTitle("");
                        setDescription("");
                    }
                    
                }} 
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium" 
                    >Adicionar
            </button>
        </div>
    );
}

export default AddTask;
