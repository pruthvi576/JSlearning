// JavaScript Objects – All basics in one file
// Object = collection of key–value pairs (like struct / map)

// 1) Creating an object
let car = {
  brand: "BMW",
  model: "X5"
};

// 2) Accessing values (dot & bracket)
console.log(car.brand);      // BMW
console.log(car["model"]);  // X5

// 3) Looping object (for...in)
// for...in gives keys one by one
for (let key in car) {
  console.log(key, car[key]);
}

// 4) Object.keys()
// Returns all keys as an array
console.log(Object.keys(car)); 
// ["brand", "model"]

// 5) Object.values()
// Returns all values as an array
console.log(Object.values(car)); 
// ["BMW", "X5"]

// 6) Object.entries()
// Returns key–value pairs
console.log(Object.entries(car)); 
// [["brand","BMW"],["model","X5"]]

// 7) Object destructuring
// Used to extract values easily (does NOT destroy object)
let book = {
  title: "JS",
  price: 500
};

let { title, price } = book;
console.log(title, price); 
// JS 500

// 8) Copying object (spread operator)
// Creates a shallow copy
let copyCar = { ...car };
console.log(copyCar);

// 9) Optional chaining
// Prevents error if key does not exist
let data = {};
console.log(data.user?.name); // undefined (no error)

// 10) Summary
console.log("Summary:");
console.log("This code demonstrates JavaScript objects, including creation, access, looping, methods like Object.keys/values/entries, destructuring, copying with spread operator, and optional chaining.");
