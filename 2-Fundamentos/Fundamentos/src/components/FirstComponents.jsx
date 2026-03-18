import React from 'react'
import MyComponents from './MyComponents'

const FirstComponents = () => {
  return (
    <>
    <div>

        <h1 className='Titulo'>React.js</h1>
        <p className='Paragrafo'>Senac Santos-Sp</p>
        
        <hr />
        

    </div>
    
    <div>
         <MyComponents/>
        <h1 className='Titulo2'>FirstComponents</h1>
        <p className='Paragrafo'>Primeira aula de fundamentos</p>
        <hr />

       
    </div>
    </>
  )
}
    
export default FirstComponents