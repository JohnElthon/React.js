
const Challenge = () => {

const soma = {
    valorA: 15,
    valorB: 10
}

    const handleSomar = ()=>{

         const resultado =  (soma.valorA + soma.valorB);

         console.log(resultado);
         
         alert(resultado);
    }

    const handleSomar2 = (valorA, valorB) =>{
        let resultado = valorA + valorB;

        alert(resultado);
        console.log(resultado)


    }


  return (
    <>
    <h2>Soma de Valores</h2>
    <p>{soma.valorA} + {soma.valorB}</p>
    <button className= "botao" onClick={handleSomar}>Somar!</button>
    <br />
    <p>Botão 2</p>
    <button className= "botao" onClick={() => handleSomar2(25,25)}>Somar2</button>
    <br />
    
     </>
  )
};

export default Challenge;
