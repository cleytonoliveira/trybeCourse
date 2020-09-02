const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => createJoke(data.joke));
}

const createJoke = (joke) => {
  const jokeContainer = document.querySelector('#jokeContainer')
  jokeContainer.innerHTML = joke;
}

window.onload = () => {
  fetchJoke()
  createJoke()
};
