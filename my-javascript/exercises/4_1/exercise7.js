const notaPorcentagem = 55;

if (notaPorcentagem >= 90 && notaPorcentagem <= 100) {
    console.log(`Sua nota foi A.`);
} else if (notaPorcentagem >= 80) {
    console.log(`Sua nota foi B.`);
} else if (notaPorcentagem >= 70) {
    console.log(`Sua nota foi C.`);
} else if (notaPorcentagem >= 60) {
    console.log(`Sua nota foi D.`);
} else if (notaPorcentagem >= 50) {
    console.log(`Sua nota foi E.`);
} else if (notaPorcentagem < 50 && notaPorcentagem > 0) {
    console.log(`Sua nota foi F.`);
} else {
    console.log(`Erro, Nota inválida.`)
}
