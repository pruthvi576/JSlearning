// functions in JavaScript

// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));
console.log(greet("Bob"));

// Function expression
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3));
console.log(add(10, 20));

// Arrow function
const multiply = (a, b) => a * b;

console.log(multiply(4, 2));
console.log(multiply(7, 6));

// Function with default parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

console.log(power(3));
console.log(power(2, 3));
console.log(power(5, 4));

// simple function of numbers with rest parameters
function findMax(...numbers) {
    console.log(...numbers);
}
console.log(findMax(1, 5, 3, 9, 2));
console.log(findMax(-10, -5, -3, -1));
console.log(findMax(100, 200, 50, 300, 150));
// output of above function 
// 1 5 3 9 2
// -10 -5 -3 -1
// 100 200 50 300 150


// function with spreaed parameters
const marks1 = [40, 50, 60];
const marks2 = [70, 80, 90];

const allMarks = [...marks1, ...marks2];
console.log(allMarks);

function total(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
}

const sum = total(...allMarks);
console.log("Total:", sum);

// functions with return value and early return pattern
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log(isEven(0)); // true
console.log(isEven(-2)); // true
console.log(isEven(-3)); // false

// first-class functions , assign to variable , pass as argument , return from other function 
function square(x) {
    return x * x;
}
const sq = square; // assign to variable
console.log(sq(5)); // 25
function applyFunction(func, value) { // pass as argument
    return func(value);
}
console.log(applyFunction(square, 6)); // 36
function getMultiplier(factor) { // return from other function
    return function(x) {
        return x * factor;
    }
}
const double = getMultiplier(2);
console.log(double(7));
const triple = getMultiplier(3);
console.log(triple(7));

// pure vs impure functions
// pure function
function pureAdd(a, b) {
    return a + b;
}
console.log(pureAdd(2, 3)); // 5
// impure function
let counter = 0;
function impureIncrement() {
    counter++;
}
impureIncrement();
console.log(counter); // 1
impureIncrement();
console.log(counter); // 2

// closure 
/* A closure is when a function remembers variables from its outer scope, even after the outer function has finished running.
This lets inner functions keep using old data safely.*/
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);
    }
}

const newFunction = outerFunction("outside");
newFunction("inside");
// Output:
// Outer Variable: outside
// Inner Variable: inside

// lexical scope
function lexicalOuter() {
    const outerVar = "I'm outside!";
    function lexicalInner() {
        console.log(outerVar);
    }   
    lexicalInner();
}
lexicalOuter(); // Output: I'm outside!

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This function runs immediately upon definition!");
})();

// summary
console.log("Summary:");
console.log("Functions can be declared in various ways: declarations, expressions, and arrow functions.");
console.log("Functions can have default parameters, rest parameters, and spread syntax.");
console.log("JavaScript supports first-class functions, closures, and lexical scoping.");
console.log("IIFEs are functions that run immediately after they are defined.");

// hoisting of function declarations and function expressions
console.log(hoistedFunction(3, 4)); // 7
function hoistedFunction(a, b) {
    return a + b;
}

// console.log(notHoistedFunction(3, 4)); // Error: notHoistedFunction is not defined
const notHoistedFunction = function(a, b) {
    return a + b;
}
console.log(notHoistedFunction(3, 4)); // 7

