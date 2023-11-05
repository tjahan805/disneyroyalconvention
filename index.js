let slideIndex = 0;
showSlides();

// Function to change the slide back or front one
function plusSlide(n) {
  showSlides((slideIndex += n));
}

// Function to display the current slide based on slideIndex
function showSlides() {
  const slides = document.getElementsByClassName('slide');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}

document.querySelector('.prev').addEventListener('click', function() {
  plusSlide(-1);
});
document.querySelector('.next').addEventListener('click', function() {
  plusSlide(1);
});

let intervalId;

// Function to start the automatic slideshow
function startSlideshow() {
  clearInterval(intervalId);
  intervalId = setInterval(function() {
    plusSlide(1);
  }, 3000);
}

startSlideshow();


