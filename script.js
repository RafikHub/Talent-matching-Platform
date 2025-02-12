const carousel = document.querySelector('.highlight-images');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let offset = 0;

// Auto-scrolling
function autoScroll() {
    offset -= 160; // Moves left by one image's width + gap
    if (Math.abs(offset) >= carousel.scrollWidth / 2) offset = 0; // Reset to loop
    carousel.style.transform = `translateX(${offset}px)`;
}

let autoScrollInterval = setInterval(autoScroll, 2000); // Auto-scroll every 2 seconds

// Manual Controls
leftBtn.addEventListener('click', () => {
    clearInterval(autoScrollInterval); // Pause auto-scroll
    offset += 160;
    carousel.style.transform = `translateX(${offset}px)`;
    autoScrollInterval = setInterval(autoScroll, 2000); // Resume auto-scroll
});

rightBtn.addEventListener('click', () => {
    clearInterval(autoScrollInterval); // Pause auto-scroll
    offset -= 160;
    carousel.style.transform = `translateX(${offset}px)`;
    autoScrollInterval = setInterval(autoScroll, 2000); // Resume auto-scroll
});




document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector(".login-button");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    loginButton.addEventListener("click", function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        console.log("Login attempted with email:", email);
        // Add actual authentication logic here
        alert("Login successful (simulation).");
    });

    const socialButtons = document.querySelectorAll(".social-login button");
    socialButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert(`Redirecting to ${button.textContent.trim()} login...`);
        });
    });
});
