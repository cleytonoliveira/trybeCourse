const mainPalette = document.getElementById('color-palette');
const boardGrid = document.getElementById('pixel-board');
const btnClear = document.getElementById('clear-board');
const numberBoardSize = document.querySelector('.board-size');
const btnGenerateBoard = document.querySelector('.generate-board');
let presentColor = 'black';

// Habilita e Desabilita a Cor desejada ao clicar;
function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  const currentColor = event.target;
  selectedColor.classList.remove('selected');
  currentColor.classList.add('selected');
  presentColor = currentColor.style.backgroundColor;
}

// Cria pixels de cores para a paleta;
function createPixelPalette(color) {
  const palettePixel = document.createElement('div');
  palettePixel.style.backgroundColor = color;
  palettePixel.className = 'color';
  palettePixel.addEventListener('click', selectColor);
  if (color === 'black') {
    palettePixel.classList.add('selected');
  }
  return palettePixel;
}

// Gera a paleta com todas opções de cores;
function generatePalette(colorOptions) {
  for (let index = 0; index < colorOptions.length; index += 1) {
    const paletteOptions = createPixelPalette(colorOptions[index]);
    mainPalette.appendChild(paletteOptions);
  }
}

// Cria cores aleatoramente;
function colorRandom() {
  const R = Math.ceil(Math.random() * 255);
  const G = Math.ceil(Math.random() * 255);
  const B = Math.ceil(Math.random() * 255);
  return `rgb(${R} , ${G} , ${B})`;
}

// Adiciona novas opções de cores;
function generateColor() {
  const colorOptions = ['black'];
  for (let index = 0; index < 3; index += 1) {
    colorOptions.push(colorRandom());
  }
  return generatePalette(colorOptions);
}

// Verifica se a quantidade de elementos e limpa o board;
function verifyElementsNumbers(numberElements) {
  const pixels = document.querySelectorAll('.pixel');
  if (numberElements === '' || numberElements < 0) {
    alert('Board inválido!');
    numberElements = 5;
    numberBoardSize.value = 5;
  }
  if (numberElements < 5) {
    numberElements = 5;
    numberBoardSize.value = 5;
  }
  if (numberElements > 50) {
    numberElements = 50;
    numberBoardSize.value = 50;
  }
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].remove();
  }
  return numberElements;
}

// Cria o grid de pixel
function createGrid(numberElements) {
  if (numberElements === undefined) {
    numberElements = 5;
  } else {
    numberElements = verifyElementsNumbers(numberBoardSize.value);
  }
  for (let index = 0; index < (numberElements ** 2); index += 1) {
    const pixel = document.createElement('div');
    boardGrid.appendChild(pixel);
    boardGrid.style.display = 'grid';
    boardGrid.style.gridTemplateColumns = `repeat(${numberElements}, 40px)`;
    pixel.className = 'pixel';
  }
}

// Pinta os pixels da cor selecionada;
function printPixel(event) {
  const selectedPixel = event.target;
  selectedPixel.style.backgroundColor = presentColor;
}

// Deixa o grid em branco;
function clearBoard() {
  const pixelBoard = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelBoard.length; index += 1) {
    pixelBoard[index].style.backgroundColor = '';
  }
}

window.onload = function () {
  generateColor();
  btnGenerateBoard.addEventListener('click', createGrid);
  createGrid();
  boardGrid.addEventListener('click', printPixel);
  btnClear.addEventListener('click', clearBoard);
};
