const escolha = {
  soma: (a, b) => a + b,
  subtracao: (a, b) => a - b,
  multiplicacao: (a, b) => a * b,
  divisao: (a, b) => {
    if ( b === 0 ){
      alert("Divisão por zero não é permitido")
      return
    } return a / b
  },
}

let continuar = true

while (continuar) {
  const escolher = prompt(`Escolha uma operação entre soma, subtração, multiplicação, divisão e sair`)

  if(escolha.hasOwnProperty(escolher) && escolher != 'sair'){
    let num1 = parseFloat(prompt("Digite o primeiro número:"))
    let num2 = parseFloat(prompt("Digite o segundo número:"))
    let resultado 
    = escolha[escolher](num1, num2)
    alert(`O resultado da ${escolher} é ${resultado}`)
  } else if(escolher == 'sair') {
    continuar = false
  } else {
    alert('Escolha uma operação válida.');
  }
}

alert('Até a próxima!')