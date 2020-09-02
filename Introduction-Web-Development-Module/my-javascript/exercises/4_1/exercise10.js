const custoProduto = 50;
const valorVenda = 0;


if (valorVenda > 0 && custoProduto > 0) {
    let lucroVenda = ((valorVenda - custoProduto) * 1000) * 0.8
    console.log(`A empresa terá ${lucroVenda} de lucro.`)
} else {
    console.log('Erro, não foi possível calcular.');
}