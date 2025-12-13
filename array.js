// arrays in javascript
let fruits = ["apple", "banana", "mango"];
console.log(fruits); // ["apple", "banana", "mango"]

// accessing elements
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "mango"

// modifying array
fruits[1] = "orange";
console.log(fruits); // ["apple", "orange", "mango"]

// push method
fruits.push("grape");
console.log(fruits); // ["apple", "orange", "mango", "grape"]

// pop method
let lastFruit = fruits.pop();
console.log(lastFruit); // "grape"
console.log(fruits); // ["apple", "orange", "mango"]

// shift method
let firstFruit = fruits.shift();
console.log(firstFruit); // "apple"
console.log(fruits); // ["orange", "mango"]
// unshift method
fruits.unshift("kiwi");
console.log(fruits); // ["kiwi", "orange", "mango"]

// splice method
fruits.splice(1, 1, "pear", "peach"); // at index 1, remove 1 element and add "pear" and "peach"
console.log(fruits); // ["kiwi", "pear", "peach", "mango"]
// summary of splice
// array.splice(startIndex, deleteCount, item1, item2, ...)
// startIndex: index to start changing the array
// deleteCount: number of elements to remove
// item1, item2, ...: elements to add to the array
// slice method
let citrus = fruits.slice(1, 3); // from index 1 to index 3 (not inclusive)
console.log(citrus); // ["pear", "peach"]
console.log(fruits); // ["kiwi", "pear", "peach", "mango"]
// summary of slice
// array.slice(startIndex, endIndex)
// startIndex: index to start slicing
// endIndex: index to end slicing (not inclusive)

// reverse method
fruits.reverse();
console.log(fruits); // ["mango", "peach", "pear", "kiwi"]
// sort method
fruits.sort();
console.log(fruits); // ["kiwi", "mango", "peach", "pear"]
// summary
console.log("Summary:");
console.log("Arrays are used to store multiple values in a single variable.");
console.log("Common array methods: push, pop, shift, unshift, splice, slice, reverse, sort.");
console.log("splice modifies the original array, slice returns a new array." );

// mapping arrays
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function(num) {
    return num * num;
});
console.log(squaredNumbers); // [1, 4, 9, 16, 25]
// summary of map
console.log("The map() method creates a new array by applying a function to each element of the original array.");

// filtering arrays
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]
// summary of filter
console.log("The filter() method creates a new array with all elements that pass the test implemented by the provided function.");

// reducing arrays
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 15
// summary of reduce
console.log("The reduce() method executes a reducer function on each element of the array, resulting in a single output value.");

// find method
let firstEven = numbers.find(function(num) {
    return num % 2 === 0;
});
console.log(firstEven); // 2
// summary of find
console.log("The find() method returns the value of the first element that satisfies the provided testing function.");

// forEach method
numbers.forEach(function(num) {
    console.log(num);
});
// summary of forEach
console.log("The forEach() method executes a provided function once for each array element.");

// some method
let hasEven = numbers.some(function(num) {
    return num % 2 === 0;
});
console.log(hasEven); // true
// summary of some
console.log("The some() method tests whether at least one element in the array passes the test implemented by the provided function.");
// every method
let allPositive = numbers.every(function(num) {
    return num > 0;
});
console.log(allPositive); // true
// summary of every
console.log("The every() method tests whether all elements in the array pass the test implemented by the provided function.");

// destructuring arrays
let [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
// summary of destructuring
console.log("Array destructuring allows unpacking values from arrays into distinct variables.");
console.log("Use ...rest to collect the remaining elements into an array.");



