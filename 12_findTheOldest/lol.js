const findTheOldest = function(array) {
    array.map(person => {
        if (!("yearOfDeath" in person)){
            person.yearOfDeath = (new Date()).getFullYear();
        }
    })
    const sorted = array.sort((a, b) => 
        (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth ) ? -1 : 1);
    return sorted[0];
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.log(typeof(findTheOldest(people)));
console.log(findTheOldest(people).name);