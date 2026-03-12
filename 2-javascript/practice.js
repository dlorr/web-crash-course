// LOGGING OUTPUT
console.log("Hello World!");
console.error("This is an error");
console.warn("This is an warn");

console.log("\n");
console.log("-------------------------");
console.log("\tLET AND CONST");
//let and const
let age = 30;
age = 31;

const constAge = 20;

console.log("age", age);
console.log("constAge", constAge);

console.log("\n");
console.log("-------------------------");
console.log("\tDATA TYPES");
//Data Types

const name = "John Doe"; //string
const score = 8; //number
const rating = 4.5; //number
const isCool = true; //boolean
const x = null; //null
const y = undefined; //undefined
let z;

console.log("Type -", typeof z);
//Concatenation
console.log("My name is " + name + "and I am " + age);
console.log(`My name is ${name} and I am ${age}`);

console.log("\n");
console.log("-------------------------");
//Sting Properties
console.log("\tSting Properties");
console.log("Length -", name.length);
console.log("UpperCase -", name.toUpperCase());
console.log("LowerCase -", name.toLowerCase());
console.log("SubString -", name.substring(0, 4));
console.log("SubStringUpperCase -", name.substring(0, 4).toUpperCase());
console.log("Split -", name.split(""));

const manyNames = "John Doe, Jane Doe, Mark Doe";
console.log("Split -", manyNames.split(", "));

console.log("\n");
console.log("-------------------------");
//Arrays
console.log("\tArrays");
const numbers = new Array(1, 2, 3, 4, 5);
console.log("numbers -", numbers);
const fruits = ["apples", "oranges", "pears"];
console.log("fruits -", fruits);

console.log("Get 2nd fruit -", fruits[1]);

fruits[3] = "grapes";
console.log("Updated fruits -", fruits);
//Array Methods
console.log("\tArray Methods");
//add to end
fruits.push("mangoes");
console.log("Pushed fruits -", fruits);
//add to beginning
fruits.unshift("strawberries");
console.log("Unshifted fruits -", fruits);
//remove from end
fruits.pop();
console.log("Popped fruits -", fruits);

console.log("Check if array -", Array.isArray(fruits));
console.log("Index of -", fruits.indexOf("oranges"));

console.log("\n");
console.log("-------------------------");
//Object Literals
console.log("\tObject Literals");
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main st",
    city: "Boston",
    state: "MA",
  },
};
console.log("Person -", person);
console.log("Person FirstName -", person.firstName);
console.log("Person 2nd Hobby -", person.hobbies[1]);
console.log("Person City -", person.address.city);

//Descructuring
console.log("\tDescructuring");
const {
  firstName,
  lastName,
  address: { city },
} = person;
console.log("firstName -", firstName);
console.log("lastName -", lastName);
console.log("city -", city);

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];

console.log("Todos -", todos);
console.log("Todos[1].text -", todos[1].text);

//Convert todos to JSON
const todoJSON = JSON.stringify(todos);
console.log("TodoJSON -", todoJSON);

console.log("\n");
console.log("-------------------------");
//Loops
console.log("\tLoops");
//For
for (let i = 0; i <= 10; i++) {
  console.log("For Loop Number -", i);
}
//While
let i = 0;
while (i <= 10) {
  console.log("While Loop Number -", i);
  i++;
}
//Do While
let j = 0;
do {
  console.log("Do While Loop Number -", j);
  j++;
} while (j <= 10);

//For Todos
for (let i = 0; i < todos.length; i++) {
  console.log("For Loop 1 -", todos[i].text);
}
for (let todo of todos) {
  console.log("For Loop 2 -", todo.text);
}

console.log("\n");
console.log("-------------------------");
//forEach, map, filter
console.log("\tforEach, map, filter");
todos.forEach(function (todo) {
  console.log("forEach -", todo.text);
});
const fromMap = todos.map(function (todo) {
  return todo.text;
});
console.log("fromMap -", fromMap);
const fromFilter = todos.filter(function (todo) {
  return todo.isCompleted === true;
});
console.log("fromFilter -", fromFilter);
const fromFilterAndMap = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });
console.log("fromFilterAndMap -", fromFilterAndMap);

console.log("\n");
console.log("-------------------------");
console.log("\tConditions");
//Conditions

const a = 10;
const b = 20;
if (a > b) {
  console.log("A is greater than B");
} else {
  console.log("B is greater than A");
}

if (a === 10) {
  console.log("A is 10");
} else if (a > 10) {
  console.log("A is greater than  10");
} else {
  console.log("A is less than 10");
}

if (a > 5 || b > 5) {
  console.log("A or B is greater than 5");
}
if (a > 5 && b > 5) {
  console.log("A or B is greater than 5");
}

//Ternary Conditions
const c = 10;
const color = c > 10 ? "red" : "blue";
console.log("Color -", color);

//Switch Conditions
switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Color is not red or blue");
    break;
}

console.log("\n");
console.log("-------------------------");
console.log("\tFunctions");
//Functions
function addNums(num1 = 1, num2 = 1) {
  return num1 + num2;
}
console.log("AddNums -", addNums(5, 5));
console.log("AddNums -", addNums(5));
console.log("AddNums -", addNums());

const arrowAddNums = (num1 = 1, num2 = 1) => num1 + num2;
console.log("arrowAddNums -", arrowAddNums(5, 5));
console.log("arrowAddNums -", arrowAddNums(5));
console.log("arrowAddNums -", arrowAddNums());

//Constructor Function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   // this.getBirthYear = function () {
//   //   return this.dob.getFullYear();
//   // };
//   // this.getFullName = function () {
//   //   return `${this.firstName} ${this.lastName}`;
//   // };
// }
// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };
// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

//Class
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//Instantiate Object
const person1 = new Person("John", "Doe", "4-3-1980");
console.log("Person -", person1);
const person2 = new Person("Jane", "Doe", "11-3-1981");
console.log("Person -", person2);
console.log("Person dob -", person2.dob);
console.log("Person year -", person2.getBirthYear());
console.log("Person fullname -", person2.getFullName());
