import Team from '../Team';

const user1 = {
  name: 'test1',
  rang: 'global',
};

const user2 = {
  name: 'test2',
  rang: 'lem',
};

test('Добавление одного персонажа', () => {
  const expectedResult = new Set([user1]);
  const team = new Team();
  team.add(user1);
  expect(team.members).toEqual(expectedResult);
});

test('Добавление одного персонажа несколько раз', () => {
  expect(() => {
    const team = new Team();
    team.add(user1);
    team.add(user1);
  }).toThrowError();
});

test('Добавление нескольких персонажей', () => {
  const expectedResult = new Set([user1, user2]);
  const team = new Team();
  team.addAll(user1, user2);
  expect(team.members).toEqual(expectedResult);
});

test('Конвертация Set в массив', () => {
  const expectedResult = ([user1, user2]);
  const team = new Team();
  team.addAll(user1, user2);
  expect(team.toArray()).toEqual(expectedResult);
});
