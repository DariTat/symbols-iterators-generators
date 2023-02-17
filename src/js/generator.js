class Team {
  constructor(player) {
    this.player = player;
  }

  *[Symbol.iterator]() {
    for (let element in this.player) {
      yield this.player[element];
    }
  }
}
const player = [
  {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  },
  {
    name: 'Маг',
    type: 'Magician',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  },
];
const play = new Team(player);
for (let element of play) {
  console.log(element);
}
