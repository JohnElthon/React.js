
const ChangeMessageState = ({ChangeMessage}) => {

    const messages = [
        "Primeira mensagem",
        "Segunda mensagem",
        "Terceira mensagem"
    ];
  return (
    <div>
     <button onClick={() => ChangeMessage(messages[0])}>1</button>
     <button onClick={() => ChangeMessage(messages[1])}>2</button>
     <button onClick={() => ChangeMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState