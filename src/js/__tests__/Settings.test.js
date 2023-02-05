import Settings from '../Settings';

test('Получение пользоввательских настроек', () => {
  const expectedResult = new Map([
    ['theme', 'light'],
    ['music', 'trance'],
    ['difficulty', 'normal'],
  ]);
  const setting = new Settings();
  expect(setting.Settings).toEqual(expectedResult);
});
