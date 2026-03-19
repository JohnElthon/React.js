

const Events = () => {
const handleMyEvents = (e) => {
    console.log(e);
    console.log("Evento 1 Ativado!");
};

const renderSomething = (x) =>{
    if(x){
        return <h2>Renderizando True!</h2>;
    } else{
        return <h2>Renderizando False!</h2>
    }
};

  return (
    <div>
        <hr />
        
    <div>
        <button onClick={handleMyEvents}>Função Maior com Nome!</button>
    </div>

    <div>
        <button onClick={() => console.log("Evento 2 ativado!")}>Função Menor sem Nome!</button>
    </div>

    <div>
        
        {renderSomething(true)}
        {renderSomething(false)}

    </div>
<hr />

    </div>
    
  )
};

export default Events;
