// loops 

// for loop
for (let i = 1; i <= 5; i++) {
    console.log("For Loop iteration: " + i);
}

// while loop
let j = 0;
while (j < 5) {
    console.log("While Loop iteration: " + j);
    j++;
}

// do...while loop
let k = 0;
do {
    console.log("Do...While Loop iteration: " + k);
    k++;
} while (k < 5);

// for...in loop
const person = {fname: "John", lname: "Doe", age: 25};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// for...of loop
const arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    console.log("For...Of Loop value: " + value);
}

// nested loops
for (let m = 1; m <= 3; m++) {
    for (let n = 1; n <= 2; n++) {
        console.log("Nested Loop - m: " + m + ", n: " + n);
    }
}

// break and continue
for (let p = 1; p <= 10; p++) {
    if (p === 6) {
        break; // exit loop when p is 6
    }
    if (p % 2 === 0) {
        continue; // skip even numbers
    }
    console.log("Break and Continue Loop value: " + p);
}

// labeled loops
outerLoop:
for (let x = 1; x <= 3; x++) {
    for (let y = 1; y <= 3; y++) {
        if (x === 2 && y === 2) {
            break outerLoop; // exit both loops
        }
        console.log("Labeled Loop - x: " + x + ", y: " + y);
    }
}