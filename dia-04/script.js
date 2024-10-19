let resposta = Math.floor(Math.random() * 10 + 1)
let tentativas = 3;

while (tentativas > 0) {
  let pergunta = prompt("Adivinhe um número de 1 a 10")
  pergunta = parseInt(pergunta)
  if (pergunta === resposta) {
    alert("Parabéns! Você acertou!");
    break;
  } else {
    alert("Você errou. Você tem " + (tentativas - 1) + " tentativas restantes.");
  }
  tentativas--;
}

if (tentativas === 0) {
  alert("Sinto muito, acabaram suas tentativas. O número correto era " + resposta)
}