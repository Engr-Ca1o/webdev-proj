



// LOADING
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

setTimeout(hideLoader,2000);


// BACK TO TOP SECTION
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top-btn").style.display = "block";
    } else {
        document.getElementById("back-to-top-btn").style.display = "none";
    }
}

window.onscroll = function() {
    scrollFunction();
};


// TESTIMONIAL CAROUSEL SECTION
let slideIndex = 1;
showSlides(slideIndex);

// applied when dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Automatic slide change
function autoSlide() {
    showSlides(slideIndex += 1);
}

// Start automatic slideshow
let slideInterval = setInterval(autoSlide, 5000); // Change slide every 5 seconds

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
