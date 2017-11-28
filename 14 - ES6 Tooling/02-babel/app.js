let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

const age = 100;
const people = ['Joey', 'Wes'];

const fullNames = people.map(name => `{name} Reyes`);

for(person of people) {
  console.log(person);
}
