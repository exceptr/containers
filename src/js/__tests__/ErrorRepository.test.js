import ErrorRepository from '../ErrorRepository';

test('Получение ошибки по ключу', () => {
  const repo = new ErrorRepository();
  expect(repo.translate(1)).toBe(('Ошибка 1'));
});

test('Провеерка исключения при несуществующем ключе', () => {
  const repo = new ErrorRepository();
  expect(repo.translate(5)).toBe('Unknown error');
});
