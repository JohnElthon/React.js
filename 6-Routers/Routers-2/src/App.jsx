import './App.css'
import Cabecalho from './components/Header/Cabecalho'
import Rodape from './components/Footer/Rodape'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contato from './pages/Contato/Contato'

function App() {

  return (
    <>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
      <Rodape />
    </>
  )
}

export default App
