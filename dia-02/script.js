function perguntas () {
  const pessoa = {
    nome: "Ana",
    idade: 21,
    linguagem: "Javascript"
  }
  console.log(`Olá ${pessoa.nome}, você tem ${pessoa.idade} anos e já está aprendendo ${pessoa.linguagem}!`);
}
perguntas()


//resposta correta:
const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

alert(msg);


// desafio extra
function perguntar() {
  const pergunta = `Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`;
  const resposta = prompt(pergunta);
  
  if(resposta === 1) {
    console.log("SIM");
  } else if (resposta === 2) {
    console.log("NÃO");
  }
}
perguntar(1);