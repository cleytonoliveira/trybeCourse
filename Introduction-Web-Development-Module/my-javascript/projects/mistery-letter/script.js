const generateLetter = document.getElementById('carta-gerada');
const btnGenerateLetter = document.getElementById('criar-carta');
const inputLetter = document.getElementById('carta-texto');
const countLetter = document.getElementById('carta-contador');

function randomClasses() {
  const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
  const sizeGroup = ['medium', 'big', 'reallybig'];
  const rotateGroup = ['rotateleft', 'rotateright'];
  const skewGroup = ['skewleft', 'skewright'];
  let classes = '';
  const randomStyle = styleGroup[Math.floor(Math.random() * 3)];
  const randomSize = sizeGroup[Math.floor(Math.random() * 3)];
  const randomRotate = rotateGroup[Math.floor(Math.random() * 2)];
  const randomSkew = skewGroup[Math.floor(Math.random() * 2)];
  classes = `${randomStyle} ${randomSize} ${randomRotate} ${randomSkew}`;
  return classes;
}

function removeAllWords() {
  while (generateLetter.firstChild) {
    generateLetter.removeChild(generateLetter.lastChild);
  }
  while (countLetter.firstChild) {
    countLetter.removeChild(countLetter.lastChild);
  }
}

function createLetter() {
  if (inputLetter.value.trim() === '') {
    generateLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    removeAllWords();
    let counter = 0;
    let inputWords = inputLetter.value;
    inputWords = inputWords.split(' ');
    for (let index = 0; index < inputWords.length; index += 1) {
      const createWords = document.createElement('span');
      createWords.className = randomClasses();
      generateLetter.appendChild(createWords);
      createWords.innerHTML = inputWords[index];
      counter += 1;
    }
    countLetter.innerHTML = counter;
  }
}

window.onload = function () {
  btnGenerateLetter.addEventListener('click', createLetter);
  generateLetter.addEventListener('click', function (event) {
    const words = event.target;
    words.className = randomClasses();
  });
};
