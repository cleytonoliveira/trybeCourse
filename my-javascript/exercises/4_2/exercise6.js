let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let qtdImpar = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        qtdImpar += 1;
    }
}

if (qtdImpar > 0) {
    console.log(`Foram encontrados ${qtdImpar} números ímpares.`);
} else {
    console.log('Nenhum valor ímpar encontrado.');
}
