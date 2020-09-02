    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  return names.reduce((accumulator, currentValue) =>
    accumulator + currentValue.split('').reduce((acc, cur) => {
      if (cur === 'A' || cur === 'a') return acc + 1;
        return acc;
    }, 0),0);
}

assert.deepEqual(containsA(), 20);
