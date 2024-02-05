const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to each other
// slides[0].style.left = slideWidth *0 + "px";
// slides[1].style.left = slideWidth *1 + "px";

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

//when i click left, move slides to the left

//when i click right, move lsids to the right
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;

  track.style.transform = "translateX(-" + amountToMove + ")";
  currentSlide.classList.remove("current-slide");
  nextSlide.classList.add("current-slide");
  //move to the next slide
});
