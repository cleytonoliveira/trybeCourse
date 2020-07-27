function mostRepeatedNumber(numbers) {
  let countRepeated = 0;
  let countNumber = 0;
  let indexRepeatedNumber = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    for (let count = 0; count < numbers.length; count += 1) {
      if (numbers[index] === numbers[count]) {
        countNumber += 1;
      }
    }
    if (countNumber > countRepeated) {
      countRepeated = countNumber;
      indexRepeatedNumber = index;
    }
    countNumber = 0;
  }
  return numbers[indexRepeatedNumber];
}

console.log(mostRepeatedNumber([2, 3, 2, 5, 8, 2, 3]));