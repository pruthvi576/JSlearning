// operators in js

let a = 10;
let b = 5;
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus
console.log("a ** b =", a ** b); // Exponentiation

// Comparison operators
console.log("a == b:", a == b); // Equal to
console.log("a != b:", a != b); // Not equal to
console.log("a > b:", a > b); // Greater than
console.log("a < b:", a < b); // Less than
console.log("a >= b:", a >= b); // Greater than or equal to
console.log("a <= b:", a <= b); // Less than or equal to

// Logical operators
let x = true;
let y = false;
console.log("x && y:", x && y); // Logical AND
console.log("x || y:", x || y); // Logical OR
console.log("!x:", !x); // Logical NOT

// Assignment operators
let c = 15;
c += 5; // c = c + 5
console.log("c after += 5:", c);
c -= 3; // c = c - 3
console.log("c after -= 3:", c);
c *= 2; // c = c * 2
console.log("c after *= 2:", c);
c /= 4; // c = c / 4
console.log("c after /= 4:", c);
c %= 6; // c = c % 6
console.log("c after %= 6:", c);
c **= 2; // c = c ** 2
console.log("c after **= 2:", c);

// Summary
console.log("Summary:");
console.log("This code demonstrates various operators in JavaScript including arithmetic, comparison, logical, and assignment operators.");
console.log("Operators are essential for performing calculations and making decisions in code.");

// unary operators
let d = 7;
console.log("Unary plus +d:", +d); // Unary plus
console.log("Unary minus -d:", -d); // Unary minus
console.log("Increment d++:", d++); // Postfix increment
console.log("d after d++:", d);
console.log("Decrement d--:", d--); // Postfix decrement
console.log("d after d--:", d);
console.log("Prefix increment ++d:", ++d); // Prefix increment
console.log("d after ++d:", d);
console.log("Prefix decrement --d:", --d); // Prefix decrement
console.log("d after --d:", d);

// turnary operator
let age = 18;
let canVote = (age >= 18) ? "Yes, can vote." : "No, cannot vote.";
console.log("Can the person vote?", canVote);
// Summary
console.log("Summary:");
console.log("This code demonstrates unary operators including unary plus, unary minus, increment, and decrement.");
console.log("It also shows the use of the ternary operator for conditional expressions.");

// typeof operator
console.log("Type of a:", typeof a); // number
console.log("Type of x:", typeof x); // boolean
console.log("Type of 'Hello':", typeof "Hello"); // string
console.log("Type of {}:", typeof {}); // object
console.log("Type of []:", typeof []); // object
console.log("Type of function():", typeof function(){}); // function

// Summary
console.log("Summary:");
console.log("The typeof operator is used to determine the type of a variable or expression.");
console.log("It returns a string indicating the type, such as 'number', 'string', 'boolean', 'object', or 'function'.");

// instanceof operator
let arr = [];
console.log("arr instanceof Array:", arr instanceof Array); // true
console.log("arr instanceof Object:", arr instanceof Object); // true
let date = new Date();
console.log("date instanceof Date:", date instanceof Date); // true
console.log("date instanceof Object:", date instanceof Object); // true
let str = "Hello";
console.log("str instanceof String:", str instanceof String); // false
console.log("new String(str) instanceof String:", new String(str) instanceof String); // true

