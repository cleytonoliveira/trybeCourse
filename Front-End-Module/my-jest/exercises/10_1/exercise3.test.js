const myRemoveWithoutCopy = require('./exercise3');

describe('Testando a função myRemoveWithoutCopy', () => {
  it('Retorna o array sem o número indicado se houver', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Retorna o array sem o parametro indicado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('O array passado por parametro não sofreu alterações', () => {
    const arr = [1, 2, 3, 4];
    myRemoveWithoutCopy(arr, 1);
    expect(arr).toEqual([2, 3, 4]);
  })
  it('Retorna o array esperado, com parametro que não esta no array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});
