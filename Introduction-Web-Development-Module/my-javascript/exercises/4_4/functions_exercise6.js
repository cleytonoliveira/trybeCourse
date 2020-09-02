function sumAllNumbers(number) {
  let sum = number;
  for (let index = 0; index < number; index += 1) {
    sum += index;
  }
  return sum;
}
console.log(sumAllNumbers(5));
