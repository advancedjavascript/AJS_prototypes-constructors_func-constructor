import Character from './app';

test('name is OK, type is Bowman', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Lucky',
    type: 'Bowman',
  };

  const received = new Character('Lucky', 'Bowman');
  expect(received).toEqual(expected);
});


test('name is uncorrect', () => {
  const output = () => new Character('A', 'Bowman');
  expect(output).toThrow();
});

test('type is uncorrect', () => {
  const output = () => new Character('Lucky', 'type');
  expect(output).toThrow();
});
