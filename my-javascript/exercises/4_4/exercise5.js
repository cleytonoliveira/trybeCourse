let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.recorrente = 'Sim';

let info1 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
}

for (let index in info) {
  if (info[index] === info1[index]) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[index] + ' e ' + info1[index])
  }
}
