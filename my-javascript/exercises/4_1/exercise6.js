const pecaXadrex = "rei";

switch (pecaXadrex.toLowerCase()) {
    case 'rei':
        console.log('Rei -> Uma casa apenas para qualquer direção.');
        break;
    case 'bispo':
        console.log('Bispo -> Apenas Diagonal.');
        break;
    case 'rainha':
        console.log('Rainha -> Diagonal e Horizontal.');
        break;
    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças.');
        break;
    case 'torre':
        console.log('Torre -> Horizontal.')
        break;
    case 'peão':
        console.log('Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.');
        break;
    default:
        console.log('Erro, peça inválida!');
        break;
}
