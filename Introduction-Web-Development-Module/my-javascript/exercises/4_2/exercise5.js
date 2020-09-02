let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumber = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maiorNumber) {
        maiorNumber = numbers[i];
    }
}

console.log(`O maior número da array é ${maiorNumber}.`);
