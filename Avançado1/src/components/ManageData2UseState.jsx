import { useState } from "react"

const ManageData2UseState = () => {
    let nome = "John";

    const [name, setName] = useState("Yan");

  return (
    <div>
        <h2>Gerenciando Dados com useState: ManageData2</h2>
        <button className="Botao" onClick={() => (nome = "Debora")}>Forma Errada</button>

        <p className="Titulo">Antes Nome: {nome}</p>
        <hr />
        <p className="Titulo">Depois Nome: {name}</p>

        <button className="Botao" onClick={() => setName("Debora")}>Forma Correta</button>
        
        <p className="Titulo">Nome: {name}</p>

        <button className="Botao" onClick={() => setName("Yan")}>Voltar ao Normal</button>

    </div>

    
  )
}

export default ManageData2UseState;