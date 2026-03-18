import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FirstComponents from './components/FirstComponents'
import MyComponents from './components/MyComponents'
import { TemplateExpressions } from './components/TemplateExpressions'

function App() {
  

  return (
    <>
       <MyComponents/>
      <FirstComponents/>
      
      <TemplateExpressions/>
     
    </>
     )       
  
}

export default App;
