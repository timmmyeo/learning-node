const people = ['yoshi', 'ryu', 'somebody'];
const ages = [20, 25, 30, 35];

// console.log(people);

// module.exports = 'hello';
// module.exports = people;

module.exports = {
  // people: people
  // ages: ages
  // under the hood it will do the above
  people,
  ages
};
