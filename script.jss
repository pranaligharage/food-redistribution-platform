// Welcome Message
window.onload = function () {
    alert("Welcome to the Food Redistribution and Waste Optimization Platform!");
};

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = this.getAttribute('href');

        if (target.startsWith("#")) {
            e.preventDefault();

            document.querySelector(target).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Donate Button
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
    });

    button.addEventListener("click", function () {
        alert("Thank you for supporting our Food Redistribution Platform!");
    });
});

// Footer Year
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = "© " + new Date().getFullYear() + " Food Redistribution Platform. All Rights Reserved.";
}
