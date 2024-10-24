const escolha = {
  soma: [],
  subtracao: [],
  multiplicacao: [],
  divisao: [],
  sair: []
}

let continuar = true

while (continuar) {
  const escolher = prompt(`Escolha uma operação entre soma, subtração, multiplicação, divisão e sair`)

  if(escolha.hasOwnProperty(escolher)){
    escolher = escolha.soma
    soma()
  } else if (escolha.hasOwnProperty(escolher)) {
    escolher = escolha.subtracao
    subtracao()
  } else if (escolha.hasOwnProperty(escolher)) {
    escolher = escolha.multiplicacao
    multiplicacao()
  } else if (escolha.hasOwnProperty(escolher)) {
    escolher = escolha.divisao
    divisao()
  } else if (escolha.hasOwnProperty(escolher)) {
    escolher = escolha.sair
    return
  }
}