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