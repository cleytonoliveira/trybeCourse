const n = 5;
const symbol = '*';
let line = '';
let midOfMatrix = (n + 1) / 2;
let controlOfLeft = midOfMatrix;
let controlOfRight = midOfMatrix;

for (let index = 0; index <= midOfMatrix; index += 1) {
  for (let count = 0; count <= n; count += 1) {
    if (count > controlOfRight && count < controlOfLeft) {
      line += symbol;
    } else {
      line += ' ';
    }
  }
  console.log(line);
  line = '';
  controlOfLeft += 1;
  controlOfRight -= 1;
}
