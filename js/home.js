let slidePosition = 0;
const slides = document.getElementsByClassName('imageContainer');
const totalSlides = slides.length;

document.
  getElementById('btnNext')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('btnPrev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('imageContainer--visible');
    slide.classList.add('imageContainer--hidden');
  }

  slides[slidePosition].classList.add('imageContainer--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}