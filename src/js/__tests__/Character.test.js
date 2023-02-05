import Character from '../Character';

test('Создание экземляра класса', () => {
  const expectedResult = {
    name: 'test1',
    rang: 'global',
  };
  expect(new Character('test1', 'global')).toEqual(expectedResult);
});
