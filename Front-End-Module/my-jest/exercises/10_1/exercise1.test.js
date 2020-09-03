const sum = require('./exercise1');

describe('Testando função Sum', () => {
  test('O retorno deve ser igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('O retorno deve ser igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Retorna erro quando passado uma string', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow(Error);
  });

  test('Retorna a menssagem parameters must be numbers ao usar string', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow('parameters must be numbers');
  });
});

