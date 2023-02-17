export default class Team {
  constructor(player) {
    this.player = player;
  }
  
  [Symbol.iterator]() {
    let index = 0;
    const element = this.player;
    return {
      next() {
        const result = {
          value: element[index],
          done: index >= element.length,
        };
        index++;
        return result;
      }
    };
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
};
