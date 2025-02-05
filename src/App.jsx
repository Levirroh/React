// assim é possível misturar JS com HTML sem necessitar de dois arquivos, unificando-os.
// Essas funções são o que mostra e cria nas páginas dependendo da função chamada.
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App(){
  const [tasks, setTasks] = useState([ // lista de tarefas
  {
    id:1,
    title: "Estudar programação",
    description: "Estudar programação até dormir no teclado",
    isCompleted: false,
  },
  {
    id:2,
    title: "Fazer compras",
    description: "Ir no mercado e pagar para poder se alimentar",
    isCompleted: false,
  },
  {
    id:3,
    title: "Ler um livro",
    description: "Ler para se distrair",
    isCompleted: false,
  },

  ])

  function onTaskClick(taskId){
    const newTasks = tasks.map((task) => {
      //preciso atualizar a tarefa.
      if (task.id == taskId){
        return { ...task, isCompleted: !task.isCompleted}; // volta o contrário, permitindo completar e "descompletar" a tarefa
      }
      return task;
    });
    setTasks(newTasks);
  }

  function TaskDelete(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId); 
    setTasks(newTasks);
  }

  function addTaskSubmit(title, description){
    const newTask = {
      id: tasks.lenght + 2,
      title, // como ele é igual ao nome da campo nao precisa dos dois pontos
      description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask]);
  }

  //um state é uma variável que se altera no React que faz com que o componente seja renderizado novamente.
  return (
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500-px] space-y-4"> 
          <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
          <AddTask addTaskSubmit={addTaskSubmit}/>
          <Tasks tasks={tasks} onTaskClick={onTaskClick} TaskDelete={TaskDelete} />
        </div>
      </div>
  )

}
export default App;

/*O return vai conseguir retornar somente uma tag parent, por exemplo,
uma única div, dentro dessa div pode conter diversas coisas, porém tudo
 deve estar dentro de uma única tag, se eu fosse colocar diversos 
 títulos, eu precisaria colocar todos eles dentro de uma única div, senão 
 ele retornaria diversas coisas, e o return retorna uma só. Mas a única div dentro do return pode conter diversas coisas.*/
