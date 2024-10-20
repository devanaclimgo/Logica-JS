const listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
  }

let continuar = true

while (continuar) {
  const pergunta = prompt("Deseja adicionar um item à sua lista de compras? Digite 1 para SIM e 2 para NÃO")

  if (pergunta === "1") {
    const inserir = prompt("Qual comida deseja inserir?")
    const categoria = prompt("Em qual categoria essa comida se encaixa? (Frutas, Laticínios, Congelados ou Doces)")

    if (listaDeCompras.hasOwnProperty(categoria)) {
      listaDeCompras[categoria].push(inserir)
      alert(`O item ${inserir} foi adicionado à categoria ${categoria}`)
    } else {
      alert("Categoria inválida.")
    }
    
  } else if (pergunta === "2") {
    let listaCompleta = "Lista de compras:\n"
    for (const categoria in listaDeCompras) {
      listaCompleta += ` ${categoria}: ${listaDeCompras[categoria].join(', ')}\n`
    }
    alert(listaCompleta)
    continuar = false
  } else {
    alert("Opção inválida, digite 1 ou 2")
  }
}