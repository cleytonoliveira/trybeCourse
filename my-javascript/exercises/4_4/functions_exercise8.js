function convertNumber(roman) {
  let romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let arrayNumber = [];
  let result = 0;
  for (let index in roman) {
    arrayNumber.push(romanNumbers[roman[index]]);
  }
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] < arrayNumber[index + 1]) {
      arrayNumber[index + 1] += - arrayNumber[index];
    } else {
      result += arrayNumber[index];
    }
  }
  return result;
}
console.log(convertNumber(['I','X']));
