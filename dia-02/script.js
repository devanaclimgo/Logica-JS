//exercicio principal
const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msg = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"!`;

alert(msg);



//exercicio extra
  function perguntar() {
    const pergunta = `Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO`;
    const resposta = prompt(pergunta);

    if (resposta == 1) {
      console.log("SIM");
    } else if (resposta == 2) {
      console.log("NÃO");
    }
  }

  perguntar(1);