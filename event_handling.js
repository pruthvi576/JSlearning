// event handling in JavaScript
/*
// Function to handle button click event
let p = document.querySelector("p");
p.addEventListener("click", function() {
    alert("Paragraph clicked!");
});


// Function to handle remove button click event
let p1 = document.querySelector("p");

function dblclickHandler() {
    p.style.display = "blue";
}

p1.addEventListener("dblclick", dblclickHandler);
p1.removeEventListener("dblclick", dblclickHandler);
*/

// Function to handle mouseover event
let id1 = document.getElementById("abcd");
id1.addEventListener("mouseover", function() {
    id1.style.backgroundColor = "blue";
});
id1.addEventListener("mouseout", function() {
    id1.style.backgroundColor = "red";
}
);

// mousemove event
id1.addEventListener("mousemove", function() {
    console.log("Mouse moved inside the box");
});

document.addEventListener("keydown", function () {
    console.log("Key pressed");
});

document.addEventListener("keyup", function () {
    console.log("Key released");
});

// target vs currentTarget
let divs = document.querySelectorAll("div");
divs.forEach(function(div) {
    div.addEventListener("click", function(event) {
        console.log("Target:", event.target);
        console.log("Current Target:", event.currentTarget);
    }
    );
});

// event bubbling and capturing
let outerDiv = document.getElementById("outer");
let innerDiv = document.getElementById("inner");
outerDiv.addEventListener("click", function() {
    console.log("Outer Div Clicked");
}
);
innerDiv.addEventListener("click", function(event) {
    console.log("Inner Div Clicked");
    event.stopPropagation(); // Stop event bubbling
} );

