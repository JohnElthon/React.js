export const ExIMC = () => {

    const imc = {
        altura:1.80,
        peso: '80'
    }
    
  const Peso = 50;
  const Altura = 1.8;
  const Resultado = Peso / (Altura * Altura);

  let classificacao = "";

  

  if (Resultado < 18.5) {
    classificacao = "Magreza";
    
  } else if (Resultado < 25) {
    classificacao = "Peso normal";
  } else if (Resultado < 30) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  return (
    <>
      <p className="Imc">Seu IMC é: {Resultado.toFixed(2)}</p><br />
      <p> Classificação: {classificacao}</p>
    </>
  );
};

export default ExIMC;
