// JavaScript para SkateZone

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const nivel = document.getElementById('nivel').value;
    const mensaje = document.getElementById('mensaje').value;
    const newsletter = document.getElementById('newsletter').checked;
    
    // Simple validation
    if (!nombre || !email) {
        alert('Por favor completa los campos requeridos');
        return;
    }
    
    // Here you would normally send the data to a server
    console.log({
        nombre,
        email,
        nivel,
        mensaje,
        newsletter
    });
    
    // Show success message
    alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado. Te contactaremos pronto.`);
    
    // Reset form
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Carousel settings
var myCarousel = document.querySelector('#equipoCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    wrap: true
})