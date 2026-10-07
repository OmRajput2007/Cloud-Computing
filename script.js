// Learn More button
function learnMore() {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
}

// Highlight active navigation link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

// Simple welcome message
window.addEventListener("load", function () {
    console.log("Cloud Computing Web Application Loaded Successfully!");
});