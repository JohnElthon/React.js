import { useState } from "react"

const ManageData2UseState = () => {
    let nome = "Marcos";

    const [name, setName] = useState("Lucas");

  return (
    <div>
        <h2>Gerenciando Dados com useState: ManageData2</h2>
        <button onClick={() => (nome = "Maria")}>Forma Errada</button>
        <p>Nome: {nome}</p>

        {/* <p>Antes Nome: {name}</p> */}
        <button onClick={() => setName("Maria")}>Forma Correta!</button>
        <p>Depois Nome: {name}</p>
    </div>

    
  )
}

export default ManageData2UseState