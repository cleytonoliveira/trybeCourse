let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
}

let info1 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
}

console.log(`${info.personagem} e ${info1.personagem}`);
console.log(`${info.origem} e ${info1.origem}`);
console.log(`${info.nota} e ${info1.nota}`);
if (info.recorrente === "Sim" && info1.recorrente === "Sim") {
  console.log('Ambos recorrentes');
}
