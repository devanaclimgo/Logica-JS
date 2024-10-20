const listaDeCompras = {
  frutas: [],
  laticínios: [],
  congelados: [],
  doces: []
};

let continuar = true;


while (continuar) {
  const pergunta = prompt(
    "Deseja adicionar um item à sua lista de compras? Digite 1 para SIM e 2 para NÃO"
  );

  if (pergunta === "1") {
    const inserir = prompt("Qual comida deseja inserir?");
    const categoria = prompt(
      "Em qual categoria essa comida se encaixa? (frutas, laticínios, congelados ou doces)"
    );

    if (listaDeCompras.hasOwnProperty(categoria)) {
      listaDeCompras[categoria].push(inserir);
      alert(`O item ${inserir} foi adicionado à categoria ${categoria}`);
    } else {
      alert("Categoria inválida.");
    }
  } else if (pergunta === "2") {
    let listaCompleta = "Lista de compras:\n";
        for (const categoria in listaDeCompras) {
            listaCompleta += ` ${categoria}: ${listaDeCompras[categoria].join(", ")}\n`;
        }
        alert(listaCompleta);

        removerItens();
    function removerItens() {
      const remover = prompt(
        "Deseja remover algum item da lista? Digite 1 para SIM e 2 para NÃO"
      );
  
      if (remover === "1") {
        const categoriaRemover = prompt(`Em qual categoria está o item que você deseja remover?\n ${listaCompleta}`)
      const indiceRemover = prompt(`Digite o índice do item que deseja remover (começando em 0) da categoria ${categoriaRemover}:\n ${listaDeCompras[categoriaRemover].map((item, index) => `${index}. ${item}`).join('\n')}`)

        if(listaDeCompras.hasOwnProperty(categoriaRemover) && indiceRemover >= 0 && indiceRemover < listaDeCompras[categoriaRemover].length) {
          const itemRemovido = listaDeCompras[categoriaRemover][indiceRemover]
          listaDeCompras[categoriaRemover].splice(indiceRemover, 1)
          alert(`${itemRemovido} com sucesso da categoria ${categoriaRemover}`)
        }
  
      } else if (remover === "2") {
        let listaCompleta = "Lista de compras atualizada:\n";
        for (const categoria in listaDeCompras) {
            listaCompleta += ` ${categoria}: ${listaDeCompras[categoria].join(", ")}\n`;
        }
        alert(listaCompleta);
      } else {
        alert("Opção inválida, digite 1 ou 2")
      }
    }
  } else {
    alert("Opção inválida, digite 1 ou 2");
  }
}
removerItens()
