const skills = ['Git', 'HTML', 'JS', 'CSS', 'Unix'];
skills.sort();

function changePhrase (name) {
  const welcome = welcomeName => `Tryber ${welcomeName} aqui! 
  Tudo bem?`;
  let welcomePhrase = `${welcome(name)}
  Minhas cinco principais habilidades são:`
  skills.forEach((skill) =>
  welcomePhrase = `${welcomePhrase}
  - ${skill}`)
  welcomePhrase = `${welcomePhrase}
  #goTrybe
  `
  return welcomePhrase
}

console.log(changePhrase('Cleyton'));
