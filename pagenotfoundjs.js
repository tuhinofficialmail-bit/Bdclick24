// JavaScript for handling the "Go Back Home" button click event
document.getElementById("go-home-btn").addEventListener("click", function() {
    window.location.href = '/'; // Redirects to the homepage
});

// Optional: Add a slight fade-in effect to the page content when it loads
window.addEventListener("load", function() {
    document.querySelector('.error-container').style.opacity = 1;
    document.querySelector('.error-container').style.transition = 'opacity 0.5s ease-in';
});
