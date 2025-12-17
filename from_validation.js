// readwing values from input , textarea , select tags in a form without array

let form = document.getElementsByClassName("myform");
form[0].addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let country = document.getElementById("country").value; 
    let gender = document.querySelector('input[name="gender"]:checked').value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Country:", country);
    console.log("Gender:", gender);
});
    event.stopPropagation();// Stop event bubbling so that outer div click event is not triggered

    
// code to show name should be at least 3 characters long
let nameInput = document.getElementById("name");
nameInput.addEventListener("input", function(d) {
    d.preventDefault();
    let nameValue = nameInput.value;
    let nameError = document.getElementById("nameError");

    if (nameValue.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long.";
    } else {
        nameError.textContent = "";
    }
});

// regex for email validation
function checkEmail() {
            // Email regex pattern
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Get input value
            let email = document.getElementById("email").value;

            // Test email against regex
            if (emailRegex.test(email)) {
                document.getElementById("result").innerText = "Valid email";
            } else {
                document.getElementById("result").innerText = "Invalid email";
            }
        }