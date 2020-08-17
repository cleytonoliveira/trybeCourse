const btnCounter = document.getElementById('counter');
const clickResults = document.getElementById('click-result');

let clickCount = 0;

const counter = () => clickResults.innerHTML = clickCount;

btnCounter.addEventListener('click', () => {
  clickCount += 1;
  counter();
});

window.onload = () => clickResults.innerHTML = clickCount;
