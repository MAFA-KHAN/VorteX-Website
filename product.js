let currentSlide = 0;

function moveSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.category');
    const slideWidth = slides[0].clientWidth + 20;  // Added 20 for the gap between images
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 3;  // To ensure we don't go past the first set of 3
    } else if (currentSlide >= totalSlides - 2) {
        currentSlide = 0;  // To loop back to the start
    }

    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function openPopup(imageSrc) {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    popupImg.src = imageSrc;
    popup.style.display = 'flex';  // Changed to 'flex' to center the popup
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}