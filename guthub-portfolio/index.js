// Add event listener to the navbar toggle button
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('.navbar-collapse').classList.toggle('show');
});

// Add event listener to the scroll event
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add event listener to the contact form submit button
document.querySelector('#contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var message = document.querySelector('#message').value;
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Message: ' + message);
});

// Add event listener to the skills section
document.querySelector('#skills').addEventListener('click', function() {
    var skills = document.querySelectorAll('.skill');
    skills.forEach(function(skill) {
        skill.classList.toggle('active');
    });
});

// Add event listener to the experience section
document.querySelector('#experience').addEventListener('click', function() {
    var experiences = document.querySelectorAll('.experience');
    experiences.forEach(function(experience) {
        experience.classList.toggle('active');
    });
});

// Add event listener to the education section
document.querySelector('#education').addEventListener('click', function() {
    var educations = document.querySelectorAll('.education');
    educations.forEach(function(education) {
        education.classList.toggle('active');
    });
});