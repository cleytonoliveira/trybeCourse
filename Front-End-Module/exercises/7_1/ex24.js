const skills = ['Git', 'HTML', 'JS', 'CSS', 'Unix'];

function changePhrase (name) {
  const welcome = welcomeName => `Tryber ${welcomeName} aqui! 
  Tudo bem?`;
  let welcomePhase = `${welcome(name)}
  Minhas cinco principais habilidades são:`
  skills.forEach((skill) =>
  welcomePhase = `${welcomePhase}
  - ${skill}`)
  welcomePhase = `${welcomePhase}
  #goTrybe
  `
  return welcomePhase
}

console.log(changePhrase('Cleyton'));
