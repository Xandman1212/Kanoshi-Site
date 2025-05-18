document.addEventListener("DOMContentLoaded", function () {
    console.log("Kanoshi website loaded!");

    let buttons = document.querySelectorAll("nav a");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.color = "#FFD700"; // Gold hover effect
        });
    });
});
