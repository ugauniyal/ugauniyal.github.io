// For Social Button
const social = document.querySelector('.social-btn');

function socialOpen(){
    document.body.classList.toggle('socials-open');
}



// For Carousel
const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel_button-right");
const prevButton = document.querySelector(".carousel_button-left");
const dotsNav = document.querySelector(".carousel_nav");
const dots = Array.from(dotsNav .children);

const slideWidth = slides[0].getBoundingClientRect().width;


// Sets Slide Position
const setSlidePosition = (slide,index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);


// Moves the slide
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}


// Updates the dots of carousel
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}


// Hides the navigation arrows when the slider is in left-most or right-most position
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }

    else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }

    else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

// Previous Button
prevButton.addEventListener("click", e =>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide)

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});


// Next Button
nextButton.addEventListener("click", e =>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});


// Dots Navigation
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    updateDots(currentDot, targetDot);

    hideShowArrows(slides, prevButton, nextButton, targetIndex);

});


// console.log(track);