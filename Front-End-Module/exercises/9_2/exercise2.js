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
  const sumOfNumber = numbersToSquare.reduce((acc, current) => acc + current);
  return (sumOfNumber < 8000) ? resolve(sumOfNumber) : reject(sumOfNumber);
})

.then(sum => console.log(`Sucesso, a soma foi de ${sum}`))
.catch(sum => console.log(`Deu Ruim!!! A soma foi de ${sum}`))
