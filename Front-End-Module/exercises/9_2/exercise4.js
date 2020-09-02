const generateRandomNumbers = () => {
  const arrayRandomNumbers = [];
  for (let index = 0; index < 10; index += 1) {
    const randomNumbers = (Math.floor(Math.random() * 50) + 1);
    arrayRandomNumbers.push(randomNumbers);
  }
  return arrayRandomNumbers;
}



new Promise((resolve, reject) => {
  const randomNumbers = generateRandomNumbers();
  const numbersToSquare = randomNumbers.map(number => number * number);
  const sumOfNumber = numbersToSquare.reduce((acc, current) => acc + current, 0);
  return (sumOfNumber < 8000) ? resolve(sumOfNumber) : reject(sumOfNumber);
})

.then(result => {
  const numbersToDivide = [2, 3, 5, 10];
  const dividedNumbers = (numbersToDivide.map(number => result / number));
  return dividedNumbers;
})
.then(result => {
  const summedValues = result.reduce((acc, current) => acc + current, 0);
  return console.log(summedValues);
})
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
