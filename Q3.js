function sortByAgeAscending() {
  let input; //the result of prompt
  let people = []; //the array of objects

  while (true) {
    input = prompt("Enter name and age separated by space");

    if (input === null || input.trim() === "") {
      break;
    }

    const [name, age] = input.split(" ");
    const newPerson = {
      name,
      //if string couldn't be parsed into string properly it wouldn't return NAN anymore
      age: isNaN(parseInt(age)) ? 0 : parseInt(age),
    };
    people.push(newPerson);
  }

  people.sort((a, b) => a.age - b.age);

  return people;
}

const sortedPeople = sortByAgeAscending();
console.log(sortedPeople);

/*
function sortPeopleByAge(people) {
  return people.sort((a, b) => a.age - b.age);
}
const people = [
  { name: "John", age: 25 },
  { name: "Max", age: 30 },
  { name: "Alex", age: 20 },
];

const sortedPeople = sortPeopleByAge(people);

console.log(sortedPeople);
*/
