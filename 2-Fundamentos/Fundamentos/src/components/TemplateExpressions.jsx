import MyComponents from "./MyComponents";

export const TemplateExpressions = () => {
    const name = "John";
    const data = {
        age: 33,
        job: "Programador"
    }
    /* Template Expressions = {} Onde colocamos o nosso Codigo javascript puro;
    */

  return (
    <>
    <h1>TemplateExpressions</h1>
    <h2>Olá {name}, tudo bem?</h2>
    <p>Idade: {data.age}</p>
    <p>Profissão: {data.job}</p>
    <p>{8+8}</p>
    <p>{console.log('Olá, Mundo!')}</p>
    

    </>
  )
};
