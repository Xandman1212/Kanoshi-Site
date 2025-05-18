document.addEventListener("DOMContentLoaded", function () {
    console.log("Kanoshi website loaded!");
    
    let buttons = document.querySelectorAll("nav button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#F1C27D"; // Golden Brown hover
        });
    });
});

function staffLogin(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username === "admin" && password === "password123") {
        document.getElementById("loginMessage").textContent = "Login successful!";
        setTimeout(() => location.href = "applications.html", 1000); // Redirect after login
    } else {
        document.getElementById("loginMessage").textContent = "Incorrect credentials!";
    }
}
