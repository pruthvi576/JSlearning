// control structure examples in JavaScript

// if-else statement
let num = 10;
if (num > 0) {
    console.log(num + " is a positive number.");
} else if (num < 0) {
    console.log(num + " is a negative number.");
} else {
    console.log(num + " is zero.");
}
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// switch statement
let day = Number(prompt("Enter a number (1-7) for the day of the week:"));
console.log(day);
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// early return pattern

var number = Number(prompt("Enter a number to check if it's even or odd:"));
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return number + " is even.";
    }
    return number + " is odd.";
}

console.log(checkEvenOdd(number));


// summary 
console.log("Summary:");
console.log("This code demonstrates control structures in JavaScript including if-else statements, switch statements, and early return patterns.");
console.log("Control structures are essential for directing the flow of execution based on conditions.");

