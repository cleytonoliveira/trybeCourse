const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeImage = document.querySelector('.meme-image');
const uploadImage = document.querySelector('#meme-insert');
const btnCustomize = document.querySelector('.customization');
const memeContainer = document.querySelector('#meme-image-container');
const memeOptions = document.querySelector('.meme-options');

// Adiciona texto a imagem;
inputText.addEventListener('keyup', function () {
  memeText.innerHTML = inputText.value;
});

// Carrega uma nova imagem a página;
function displayImage(event) {
  const file = event.target.files[0];
  memeImage.src = URL.createObjectURL(file);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
}
uploadImage.addEventListener('change', displayImage);

// Adiciona borda ao container;
function changeBorder(event) {
  const newBorder = event.target.id;
  if (newBorder === 'fire') {
    memeContainer.style.border = '3px dashed red';
  }
  if (newBorder === 'water') {
    memeContainer.style.border = '5px double blue';
  }
  if (newBorder === 'earth') {
    memeContainer.style.border = '6px groove green';
  }
}
btnCustomize.addEventListener('click', changeBorder);

// Adiciona imagem ao container principal
function changePicture(event) {
  memeImage.src = event.target.src;
}
memeOptions.addEventListener('click', changePicture);
