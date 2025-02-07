// assim é possível misturar JS com HTML sem necessitar de dois arquivos, unificando-os.
// Essas funções são o que mostra e cria nas páginas dependendo da função chamada.
import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App(){
  const [tasks, setTasks] = useState(// lista de tarefas
  JSON.parse(localStorage.getItem("tasks")) || []
  ); // vai pegar todas os itens do local storage e mostrar como tarefas.


 // vai rodar essa função TODA vez que o item referido (nesse caso o 'tasks') for alterado
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // transforma o valor de id, title e description da task para strings e salva no local storage
    }, [tasks]);
  
  /*
    useEffect(() => {
      async function fetchTasks(){
      //chamar API.
      const response = await fetch('https://jsonplaceholder.typecode.com/todos?_limit=10',{method: 'GET'});
      const data = await response.json(); //converte os dados chamados para json

      // pegar dados que ela retorna.

      // Armazenar os dados dela nos states.
      setTasks(data);
      };
      fetchTasks();
      }, []) // somente a primeira vez que o usuário entrar na aplicação isso vai rodar (lista vazia)
  */
  

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
    const newId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1; // ele cria um newId, que verifica o tamanho da array do tasks, se for zero a nova tarefa tem id 1, se tiver um id já existente ele verifica o maior número de id presente e soma 1.
    const newTask = {
      id: newId,
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
