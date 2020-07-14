const salarioBruto = 4000;
let aliquotaInss = 0;
let aliquotaIR = 0;

if (salarioBruto <= 1556.94) {
    aliquotaInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    aliquotaInss = salarioBruto * 0.09;
} else if (salarioBruto <=   5189.82) {
    aliquotaInss = salarioBruto * 0.11;
} else {
    aliquotaInss = 570.88;
}

let salarioBase = salarioBruto - aliquotaInss;

if (salarioBase <= 1903.98) {
    aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
    aliquotaIR = (salarioBase * 0.075) - 142.8;
} else if (salarioBase <= 3751.05) {
    aliquotaIR = (salarioBase * 0.15) - 354.9;
} else if (salarioBase <= 4664.68) {
    aliquotaIR = (salarioBase * 0.225) - 636.12;
} else {
    aliquotaIR = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - aliquotaIR;

console.log(`O salário liquido será de ${salarioLiquido}`);