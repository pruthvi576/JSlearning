// Synchronous function that returns the square of a number

function square(x) {
    return x * x;
}
console.log("Square of 4:", square(4)); // Output: 16

// Asynchronous without promises (using setTimeout)
function asyncSquare(x, callback) {
    setTimeout(() => {
        callback(x * x);
    }, 1000);
}
asyncSquare(5, (result) => {
    console.log("Asynchronous square of 5:", result); // Output: 25 after 1 second
});

// callback pattern 
function fetchDataCallback(id, callback) {
    setTimeout(() => {
        const data = { id: id, name: "Item " + id };
        callback(data);
    }, 1000);
}       
fetchDataCallback(1, (data) => {
    console.log("Data fetched with callback:", data); // Output: Data fetched with callback: { id: 1, name: 'Item 1' }
}   );

// callback hell example
function fetchDataCallbackHell(id, callback) {
    setTimeout(() => {
        const data = { id: id, name: "Item " + id };
        callback(data);
    }, 1000);
}
fetchDataCallbackHell(1, (data1) => {
    console.log("Data 1:", data1);
    fetchDataCallbackHell(2, (data2) => {
        console.log("Data 2:", data2);
        fetchDataCallbackHell(3, (data3) => {
            console.log("Data 3:", data3);
        });
    });
});
// summary: Callback hell occurs when multiple nested callbacks make the code hard to read and maintain.

// promises 
let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10);
        if (rn > 5) {
            resolve(rn);
        } else {
            reject("Number is too small");
        }
    }, 1000);
});
pr.then((value) => {
    console.log("Resolved with value:", value);
}).catch((error) => {
    console.log("Rejected with error:", error);
});
// summary: Promises provide a cleaner way to handle asynchronous operations compared to callbacks, allowing chaining and better error handling.

// async/await
let pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let rn1 = Math.floor(Math.random() * 10);
        if (rn1 > 5) {
            resolve(rn1);
        } else {
            reject("Number is too small");
        }
    }, 1000);
});

async function abcd() {
    try {
        let result = await pr1;
        console.log("Async/Await resolved with value:", result);
    } catch (error) {
        console.log("Async/Await rejected with error:", error);
    }
}
abcd();
// summary: async/await syntax allows writing asynchronous code that looks synchronous, improving readability and maintainability.

