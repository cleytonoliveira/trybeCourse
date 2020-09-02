function triagle(n) {
  let symbol = '*';
  let spaces = ' ';
  let line = [];
  let base = [];
  let matrix = [];
  let controlLeft = 1;
  let controlRigth = n - 2;

  for (let lineColumn = 0; lineColumn < n; lineColumn += 1) {
    base[lineColumn] = symbol;
  }
  matrix[0] = base;
  for (let lineIndex = 1; lineIndex < n; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
      if (columnIndex === controlLeft || columnIndex === controlRigth) {
        line[columnIndex] = symbol;
      } else {
        line[columnIndex] = spaces;
      }
    }
    matrix[lineIndex] = line;
    controlLeft += 1;
    controlRigth -= 1;
    line = [];
    if (controlLeft > controlRigth) break;
  }
  let result = '';
  for (let lineIndex = matrix.length - 1; lineIndex >= 0; lineIndex -= 1) {
    for (let lineColumn = 0; lineColumn < n; lineColumn += 1) {
      result += matrix[lineIndex][lineColumn];
    }
    console.log(result);
    result = '';
  }
}
triagle(7);