// assim é possível misturar JS com HTML sem necessitar de dois arquivos, unificando-os.
// Essas funções são o que mostra e cria nas páginas dependendo da função chamada.

import { useState } from "react";

function App(){

  const [message, setMessage] = useState("Olá mundo");

  //um state é uma variável que se altera no React que faz com que o componente seja renderizado novamente.
  return (

    <div>
      <h1>{message}</h1>
      <button onClick={() =>{
        setMessage("Olá, de novo, mundo!");
      }}>Mudar Mensagem</button>
    </div>
    
  )

}
export default App;

/*O return vai conseguir retornar somente uma tag parent, por exemplo,
uma única div, dentro dessa div pode conter diversas coisas, porém tudo
 deve estar dentro de uma única tag, se eu fosse colocar diversos 
 títulos, eu precisaria colocar todos eles dentro de uma única div, senão 
 ele retornaria diversas coisas, e o return retorna uma só. Mas a única div dentro do return pode conter diversas coisas.*/
