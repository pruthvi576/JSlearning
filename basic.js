// basics let is block scoped
let x = 2;
{
    let x =1;
    console.log(x); // 1
}
console.log(x); // 2

// const is also block scoped and cannot be reassigned
const y = 5;
// y = 10; // This will throw an error

{
    const y = 10;
    console.log(y); // 10
}
console.log(y); // 5

// var is function scoped
var z = 3;
{
    var z = 4;
    console.log(z); // 4
}
console.log(z); // 4

// var can be redeclared
var z = 5;
console.log(z); // 5

// Demonstrating hoisting with var

console.log(a); // undefined
var a = 10;
console.log(a); // 10

// Demonstrating temporal dead zone with let and const
// console.log(b); // ReferenceError
let b = 20;
console.log(b); // 20

// console.log(c); // ReferenceError
const c = 30;
console.log(c); // 30

// Summary
console.log("Summary:");
console.log("let and const are block scoped, var is function scoped.");
console.log("const cannot be reassigned, var can be redeclared.");
console.log("let and const are not hoisted like var.");


