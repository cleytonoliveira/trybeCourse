const generateRandomNumbers = () => {
  const arrayRandomNumbers = [];
  for (let index = 0; index < 10; index += 1) {
    const randomNumbers = (Math.floor(Math.random() * 50) + 1);
    arrayRandomNumbers.push(randomNumbers);
  }
  return arrayRandomNumbers;
}

const sumNumbers = () => {
  const randomNumbers = generateRandomNumbers();
  const numbersToSquare = randomNumbers.map(number => number * number);
  const sumOfNumber = numbersToSquare.reduce((acc, current) => acc + current, 0);
  if (sumOfNumber < 8000) throw new Error();
  return sumOfNumber;
}

const numbersToDivide = [2, 3, 5, 10];
const dividedNumbers = result => numbersToDivide.map(number => result / number);

const fetchPromise = async () => {
  try {
    const sum = await sumNumbers();
    const array = await dividedNumbers(sum);
    console.log(array);
  }
  catch(error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();
