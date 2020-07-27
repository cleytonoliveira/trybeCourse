const number = 7;
let testePrimo = 0;

for (let index = 0; index <= number; index += 1) {
    if (number % index === 0 && number % 1 === 0) {
        testePrimo += 1;
    }
}

if (testePrimo <= 2) {
    console.log(`O ${number} é um número primo.`)
} else {
    console.log(`O ${number} não é um número primo.`)
}
