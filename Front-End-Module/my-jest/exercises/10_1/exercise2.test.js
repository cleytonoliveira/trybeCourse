const myRemove = require('./exercise2');

describe('Testando função myRemove', () => {
  test('Retorna o array sem o número indicado por parametro', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('Retorna o array correto', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  });
  test('O array passado por parametro não pode ser alterado', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 1);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
  test('Retorna o array se mesmo não passando parametro incluido', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
