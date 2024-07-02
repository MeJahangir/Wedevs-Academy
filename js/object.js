const parson = {
    name : "Jahangir alam",
    roll : 32,
    great : function () {
        return this.roll;
        // console.log(this.roll);
    },
};
// parson.great();
console.log(parson.great());

const person = {
    name: "Jahangir Alam",
    roll: 32,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

// Accessing object properties
console.log(person.name);  // Output: Jahangir Alam
console.log(person.roll);  // Output: 32

// Calling an object method
person.greet();  // Output: Hello, Jahangir Alam
