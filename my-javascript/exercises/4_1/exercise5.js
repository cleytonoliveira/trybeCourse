const primeiroAngulo = 60;
const segundoAngulo = 60;
const terceiroAngulo = 60;

let validandoAngulos = (primeiroAngulo + segundoAngulo + terceiroAngulo) === 180;

if (validandoAngulos === true) {
    console.log('É um triângulo válido.');
} else {
    console.log('Não é um triângulo.');
}
