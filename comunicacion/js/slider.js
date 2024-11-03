let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slides img');
    let dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    slides.forEach((slide, index) => {
        slide.style.display = (index + 1 === slideIndex) ? 'block' : 'none';
    });
    
    dots.forEach((dot, index) => {
        dot.className = dot.className.replace(" active", "");
        if (index + 1 === slideIndex) {
            dot.className += " active";
        }
    });
}

// Cambiar de imagen cada 3 segundos automáticamente
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 3000);
