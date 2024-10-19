const area = prompt("Você deseja seguir para a área de Front-End ou seguir para a área de Back-End?");

const respostaArea = prompt(area);

if (respostaArea === "Front-End") {
  console.log(prompt("Quer aprender React ou Vue?"))
} else if (respostaArea === "Back-End") {
  console.log(prompt("Quer aprender C# ou Java?"))
}

const seguir = prompt("Deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?")

const respostaSeguir = prompt(seguir)

if (respostaSeguir == "Fullstack") {
  console.log("Continue estudando que você chega lá!")
} else {
  console.log("Muito bem! Uma especialização sempre é importante")
}

const tecnologias = prompt("Quais são as tecnologias que deseja se especializar?")
const respostaTecnologias = prompt(tecnologias)

while (respostaTecnologias === "ok") {
  console.log("Tem mais alguma tecnologia que deseja aprender?")
}