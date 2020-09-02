const n = 5;
const symbol = '*';
let linhaDeAsteriscos = '';

if (n > 1) {
    for (let count = 1; count <= n; count += 1) {
      linhaDeAsteriscos += symbol;
    }
    for (let index = 1; index <= n; index += 1) {
      console.log(linhaDeAsteriscos);
    }
  } else {
  console.log('Número inválido.');
}
