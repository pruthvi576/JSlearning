// local storage
localStorage.setItem("name", "John Doe");
localStorage.setItem("age", "30");

// retrieving data from local storage   
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

// removing data from local storage
localStorage.removeItem("age");

// updating data in local storage
localStorage.setItem("name", "Jane");
//summary of updates
// we can set a value the same way as update anything in local storage 

// clearing all data from local storage
localStorage.clear();

// session storage
sessionStorage.setItem("sessionName", "Session User");
sessionStorage.setItem("sessionAge", "25");

let sessionName = sessionStorage.getItem("sessionName");
let sessionAge = sessionStorage.getItem("sessionAge");
sessionStorage.removeItem("sessionAge");
sessionStorage.setItem("sessionName", "Updated Session User");
sessionStorage.clear();

// cookies
document.cookie = "name=raj";

// we cant store anything directly except string in local storage , like array and object 
// so to get any array or object we have to convert it into string using JSON.stringify() method

localStorage.setItem("fruits", JSON.stringify(["apple", "banana", "mango"]));
let ho = JSON.parse(localStorage.getItem("fruits"));
console.log("ho");

// code to make site dark or light mode 
function toggleDarkMode() {
    if(window.matchMedia ('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }
    else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
}
//toggleDarkMode();

if(localStorage.getItem("theme")) {
    document.body.classList.remove("dark","light");
    document.body.classList.add(localStorage.getItem("theme"));
}else {
    toggleDarkMode();
}

window.matchMedia ('(prefers-color-scheme: dark)').addEventListener('change', function(){
    if(!localStorage.getItem("theme")){
    toggleDarkMode();
    }
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // code to toggle dark and light mode using button
    let btn = document.querySelector("button");
    console.log("Button found:", btn);
    console.log("Current theme in localStorage:", localStorage.getItem("theme"));
    console.log("Body classes:", document.body.classList);

    if (btn) {
        btn.addEventListener("click", function() {
            console.log("Button clicked!");
            if(document.body.classList.contains("dark")) {  
                document.body.classList.remove("dark");
                document.body.classList.add("light");
                localStorage.setItem("theme", "light");
                console.log("Switched to light theme");
            }
            else {
                document.body.classList.remove("light");
                document.body.classList.add("dark");
                localStorage.setItem("theme", "dark");
                console.log("Switched to dark theme");
            }
        });
    } else {
        console.error("Button not found!");
    }
});

