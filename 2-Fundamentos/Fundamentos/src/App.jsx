import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FirstComponents from './components/FirstComponents'
import MyComponents from './components/MyComponents'
import { TemplateExpressions } from './components/TemplateExpressions'
import Events from './components/Events'
import Challenge from './components/Challenge'
import Charizard from './assets/Charizard.png'

function App() {
  

  return (
    <>
       {/* <MyComponents/>
      <FirstComponents/>      
      <TemplateExpressions/>
      <Events/>
      <Challenge/> */}
      
      <div>
      <h2>Imagens Public: </h2>

      <div className='imangens'>
        <img  src="Mew.png" alt="Pokemon Mew" />
        <hr />
      </div>
      
      <div>
        <img src="Mewtwo.png" alt="Pokemon Mewtwo" />
        <hr />
      </div>

      <h2>Imagen Assets:</h2>
      <div>
        <img src={Charizard} alt="Pokemon Charizard" />
      </div>

      </div>
     
    </>
     )       
  
}

export default App;
