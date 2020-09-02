const n = 5;
const symbol = '*';
let line = '';
let posicaoColuna = n;

for (let index = 0; index <= n; index += 1) {
    for (let count = 0; count < n; count += 1) {
        if (count < posicaoColuna) {
            line += ' ';
        } else {
            line += symbol;
        }
    }
    console.log(line);
    line = '';
    posicaoColuna = posicaoColuna - 1;
}
