import './Exemplo.css'
import styles from './Exemplo.module.css'


// import styles from './Exemplo.module.css' <------ Dessa forma utilizando o Module os estilos não vazariam para os outros componentes.

const Exemplo = () => {
  return (
    <div>
        <h1 className='tituloExemplo'>Exemplo de componente</h1>
        <h1 className={styles.titulo}>Exemplo de Componentes</h1>
    </div>
  )
}

export default Exemplo;