// selecting methods in the DOM (Document Object Model  )
let element = document.getElementById("my");
console.log(element);

// get elements by class name
let elements = document.getElementsByClassName("test");
console.log(elements);

// query selector
let a = document.querySelector("a");
console.log(a);
//we can place a value to any attribute
a.setAttribute("href", "https://www.google.com");

// query selector all
let allTestElements = document.querySelectorAll("h1");
console.log(allTestElements);

// use of setAttribute 
let img = document.querySelector("img");
img.setAttribute("src","https://images.unsplash.com/photo-1506104489822-562ca25152fe?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

// use of getAttribute
let a1 = document.querySelector("a");
console.log(a1.getAttribute("href"));

// use of removeAttribute
let a2 = document.querySelector("a");
a2.removeAttribute("href");
console.log(a2.getAttribute("href")); // null

// creating and inserting elements in the DOM
// prepend
let h1 = document.createElement("h1");
h1.textContent = "This is created using JS";
document.body.prepend(h1);
// append
let h2 = document.createElement("h2");
h2.textContent = "This is appended using JS";
document.body.append(h2);

// removing elements from the DOM
let h1ToRemove = document.querySelector("h1");
h1ToRemove.remove();

document.querySelector("div").prepend(h1);                      