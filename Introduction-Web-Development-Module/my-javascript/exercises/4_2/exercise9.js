let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1) {
    for (let c = 0; c < i; c += 1) {
        if (numbers[i] > numbers[c]) {
            let posicao = numbers[i];

            numbers[i] = numbers[c];
            numbers[c] = posicao;
        }
    }
}

console.log(numbers);
