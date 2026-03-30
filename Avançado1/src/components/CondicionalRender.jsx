import {useState} from 'react'

const CondicionalRender = () => {
const [x] = useState(false);

const [name, setName] = useState ("John");

  return (
    <div>
        <h2>Renderizando Condicionalmente: CondicionalRender</h2>

        <h3>Isso será Excluido?</h3>

        {/*Condicional Simples*/}
        <h3>Condicional Simples:</h3>
        {x && <p> Se x for true, Sim!</p>}
        {!x && <p>Se x for false, Sim!</p>}

        {/* Operadores Ternários */}
        <h3>Operador Ternário:</h3>
        {x ? <p>Se x for true, Sim!</p> : <p>Se x for False, Sim!</p>}

        {name === "John" ? (<p>Olá, John</p>) : (<p>Olá, João!</p>)}
        <button onClick={() => setName("João")}>Mudar nome</button>
        <hr />
    </div>
  )
}

export default CondicionalRender;