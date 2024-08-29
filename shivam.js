// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Dark/Light Mode Toggle
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name === '' || email === '' || message === '') {
        alert('Please fill all the fields');
    } else {
        alert('Thank you for your message!');
        this.reset();
    }
});

// Page Transitions
window.addEventListener('beforeunload', function () {
    document.body.classList.add('animate-out');
});

document.body.classList.add('animate-in');
