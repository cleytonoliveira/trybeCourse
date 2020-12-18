const sum = require('./exercise1');

describe('Testando função Sum', () => {
  it('O retorno deve ser igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('O retorno deve ser igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Retorna erro quando passado uma string', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow(Error);
  });

  it('Retorna a menssagem parameters must be numbers ao usar string', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow('parameters must be numbers');
  });
});

