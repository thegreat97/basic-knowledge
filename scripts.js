document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            const input = form.querySelector('.text');
            if (input && input.value.trim() === '') {
                alert('Please enter your details before submitting.');
                e.preventDefault();
            }
        });
    }
});
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-images');
    const totalSlides = slides.children.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Optional: Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Clear previous error message
    document.getElementById('error-message').textContent = '';

    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate inputs
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Both fields are required.';
        return;
    }

    // Simulate successful login (In a real application, you would send a request to your server here)
    alert('Login successful!');
    
    // Optionally, clear the form
    document.getElementById('loginForm').reset();
});
 // JavaScript to handle button click
 document.getElementById('playButton').addEventListener('click', function() {
    var video = document.getElementById('video');
    video.play(); // Play the video
});
document.getElementById('startButton').addEventListener('click', function() {
    var counter = document.getElementById('counter');
    var count = 0;
    var interval = setInterval(function() {
        count++;
        counter.textContent = count;

        // Stop counting at 100 for demonstration purposes
        if (count >= 3000) {
            clearInterval(interval);
        }
    }, 100); // Update every 100 milliseconds
});