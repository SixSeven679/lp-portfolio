// script.js

// Function to change the background color of the "About Me" section
function changeBackgroundColor() {
    var aboutSection = document.getElementById('about');
    aboutSection.style.backgroundColor = '#e6f7ff';
}

// Example of calling the function when the page loads
document.addEventListener('DOMContentLoaded', function () {
    changeBackgroundColor();
});
