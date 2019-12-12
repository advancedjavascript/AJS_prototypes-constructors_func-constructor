export default function Character(name, type) {
  if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
    this.name = name;
  } else {
    throw new Error('Name is uncorrect');
  }

  const types = {
    Bowman: { att: 25, def: 25 },
    Swordsman: { att: 40, def: 10 },
    Magician: { att: 10, def: 40 },
    Daemon: { att: 10, def: 40 },
    Undead: { att: 25, def: 25 },
    Zombie: { att: 40, def: 10 },
  };

  if (Object.keys(types).includes(type) === true) {
    this.type = type;
  } else {
    throw new Error('Type is uncorrect');
  }

  this.health = 100;
  this.level = 1;
  this.attack = types[type].att;
  this.defence = types[type].def;
}
