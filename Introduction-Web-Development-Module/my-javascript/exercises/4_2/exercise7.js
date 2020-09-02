let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumber = 1000;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menorNumber) {
        menorNumber = numbers[i];
    }
}

console.log(`O menor número encontrado no array é ${menorNumber}.`);
