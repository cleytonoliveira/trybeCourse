function bigName(name) {
  let bigName = name[0];
  for (let index in name) {
    if (bigName.length < name[index].length) {
      bigName = name[index];
    }
  }
  return bigName;
}

console.log(bigName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
