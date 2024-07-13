// Function Declaration
function add (a , b) {
    return a + b;
};
console.log(add(10, 20));

// Function Expression
const multy = function (a,b) {
    return a * b;
}
console.log(multy(2,4));

// Arrow function
const subtract = (a, b) => a - b;
console.log(subtract(5,2));

function Person(name, age) {
    this.name = name;
    this. age = age;
}

const person1 = new Person("Jahangir alam", 25);
console.log(person1);

//call function
function greet(greeting) {
    console.log(greeting +' ' + this.name);
}

const person = {
    name: "Jahangir Alam"
};

const test = greet.call(person, "Hello"); // "Hello, Jahangir Alam"

// apply function
function greet(greeting) {
    console.log(greeting + ", " + this.name);
}

const person2 = {
    name: "Jahangir Alam"
};

greet.apply(person2, ["Hello"]); // "Hello, Jahangir Alam" 

// using bind function
function greet(greeting) {
    console.log(greeting + ", " + this.name);
}

const person3 = {
    name: "Jahangir Alam"
};

const greetPerson = greet.bind(person3);
greetPerson("Hello"); // "Hello, Jahangir Alam"

 
function Person3(name, age) {
    this.name = name;
    this.age = age; 
}
const Persons = new Person3("jahangir", 25);
console.log(Persons.name);

