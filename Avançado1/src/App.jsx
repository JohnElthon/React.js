import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ManageData2UseState from './components/ManageData2UseState'
import ListRender from './components/ListRender'
import CondicionalRender from './components/CondicionalRender'
import ShowUserName from './components/ShowUserName'
import Fragment2 from './components/Fragment2'
import CarDetails from './components/CarDetails'
import Container from './components/container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'


//Ordem de aprendizagem:
//1 - Imagem em Public - Arquivo App.jsx
//2 - Imagem em Assets - Arquivo App.jsx
//3 - useState: Gerenciamento de estado - Arquivo ManageData.jsx e ManageData2UseState.jsx
//4 - Renderização de listas e objetos - Arquivo ListRender.jsx
//5 - Renderização condicional - Arquivo CondicionalRender.jsx
//6 - Props - Arquivo ShowUserName.jsx
//7 - Destructuring Props - Arquivo CarDetails.jsx
//8 - Reaproveitando Componente - Arquivo CarDetails.jsx
//9 - Loop em array de objetos - Arquivo App.jsx (Array de objetos utilizado em CarDetails.jsx)
//10 - Fragment - Arquivo Fragment2.jsx
//11 - Children - Arquivo Container.jsx
//12 - Executar função por Props(Pelo componente Filho) - Arquivo ExecuteFunction.jsx
//13 - State Lift: Um componente exibe outro altera, o Pai gerencia; - Arquivo App.jsx (Componente Message.jsx e ChangeMessageState.jsx)


function App() {
  
  {/* Variável utilizada em ShowUserName*/}
  const [userName] = useState("John Elthon")

  {/* Array de objetos utilizado em CarDetails*/}
  const cars =[
    {id:1, brand: "Ferrari", color:"Vermelho", km:0, novo:true},
    {id:2, brand: "Ford", color:"Preto", km:10000, novo:false},
    {id:3, brand: "Fiat", color:"Cinza", km:45000, novo:false},
    {id:4, brand: "Chevrolet", color:"Azul", km:0, novo:true}
  ]

  {/* Função para ser executada no componente filho: ExecuteFunction*/}
  function showMessage(){
    console.log("Evento do componente pai")
  }

  {/* State Lift: Criando estado no componente pai e alterando ele a partir do componente filho*/}
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>

          {/* <ManageData: Alterando usando useState/> */}
         <ManageData2UseState/> 
         <hr />

         {/* Renderização de listas e objetos */}
         <ListRender/>

         {/* Renderização condicional */}
         <CondicionalRender/>

          {/* Utilizando Props */}
         <ShowUserName name={userName}/>
         <hr />

         {/* Fragment2*/}
         <Fragment2 propFragment='teste'/>

         {/* Destructuring Props*/}
         <h2>Usando Props Desconstruídas: CarDetails</h2>
         <CarDetails brand="Ferrari" km={1000000} color="Preto" novo={false}/>
         <hr />

         {/* Loop em array de objetos*/}
         <h2>Loop em array de objetos: CarDetails</h2>
         {cars.map((car) => (
          <CarDetails
            key={car.id}
            id={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            novo={car.novo}
          />
         ))}
         <hr />

         {/* Children: Conseguimos renderizar conteúde Html pelo componente filho*/}
      <Container propValor = "John Elthon">
        <h3>Children</h3>
        <p>Conteúdo filho do Container</p>
      </Container>
      <hr />
      
      {/* Executar função por Props (Pelo componente Filho*/}
      <ExecuteFunction myFunction={showMessage}/>
      <hr />

      {/* State Lift: Um componente exibe outro altera, o Pai gerencia*/}
      <Message msg={message}/> {/* Componente que existe o valor do estado message*/}
      <ChangeMessageState ChangeMessage={handleMessage}/> {/* Componente que altera o valor do estado*/}
      

        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
