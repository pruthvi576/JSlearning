// scope - functional , global & block scope

// functional scope
function greet() {
    let message = "Hello, World!";
    console.log(message); // Accessible here
}
greet();
// console.log(message); // Error: message is not defined

// global scope
let globalVar = "I am global";
function showGlobal() {
    console.log(globalVar); // Accessible here
}
showGlobal();
console.log(globalVar); // Accessible here

// block scope
if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar); // Accessible here
}
// console.log(blockVar); // Error: blockVar is not defined

// lexical scope
function outerFunction() {
    let outerVar = "I am from outer function";
    function innerFunction() {
        console.log(outerVar); // Accessible here due to lexical scope
    }
    innerFunction();
}
outerFunction();
//summary of lexical scope
// Inner functions have access to variables defined in their outer functions, even after the outer function has finished executing.
// This is known as lexical scoping or static scoping.
// It allows for closures, where inner functions "remember" the environment in which they were created.

// closures
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
let counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
//summary of closures
// A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.
// Closures allow functions to have "private" variables that cannot be accessed from outside the function.
// They are commonly used for data encapsulation and creating function factories.

// encapsulation
function createPerson(name, age) {
    return {
        getName: function() {
            return name;
        },
        getAge: function() {
            return age;
        }
    };
}
let person = createPerson("Alice", 30);
console.log(person.getName()); // Alice
console.log(person.getAge()); // 30
//summary of encapsulation
// Encapsulation is the bundling of data (variables) and methods (functions) that operate on that data into a single unit or object.
// It restricts direct access to some of an object's components, which can prevent the accidental modification of data.
// Encapsulation is a fundamental principle of object-oriented programming that helps in maintaining code modularity and integrity.
