// global this
console.log(this); // In global scope, 'this' refers to the global object (window in browsers, global in Node.js)

// function this
function showThis() {
    console.log(this); // In a regular function, 'this' refers to the global object (or undefined in strict mode)
}
showThis();

// method this
const obj = {
    name: "Alice",
    greet: function() {
        console.log(this.name); // In a method, 'this' refers to the object the method is called on
    }
};
obj.greet();
// summary of method this
// In object methods, 'this' refers to the object itself.
// This allows methods to access and manipulate the object's properties.

// event handler this
document.getElementById("myButton")?.addEventListener("click", function() {
    console.log(this); // In event handlers, 'this' refers to the element that received the event
}
);

// class this
class Person {
    constructor(name) {
        this.name = name; // In a class constructor, 'this' refers to the instance being created
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}`); // In class methods, 'this' refers to the instance
    }
}

const person1 = new Person("Bob");
person1.introduce();        
// summary of class this
// In class constructors and methods, 'this' refers to the instance of the class.
// This allows instances to have their own properties and methods that operate on those properties.

/* global - window
function - window (or undefined in strict mode)
method - the object the method is called on
method with arrow function - window 
function inside method - window 
arrow function inside method - object 
event handler - the element that received the event
class constructor - blank object (the instance being created)
*/

// arrow function and lexical this
const arrowObj = {
    name: "Charlie",
    greet: function() {
        const arrowFunc = () => {
            console.log(this.name); // 'this' here refers to 'arrowObj' due to lexical scoping of arrow functions
        }
        arrowFunc();
    }
};
arrowObj.greet();
// summary of arrow function and lexical this
// Arrow functions do not have their own 'this' context.
// Instead, they inherit 'this' from the surrounding lexical scope.
// This is useful for preserving the context of 'this' in nested functions.