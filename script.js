window.onload = function() {
  let index = 0;
  const slides = document.getElementById("slides");
  const totalSlides = slides.children.length;

  function showSlide(){
    slides.style.transform = `translateX(-${index * 500}px)`;
  }

  window.nextSlide = function(){
    index = (index + 1) % totalSlides;
    showSlide();
  }

  window.prevSlide = function(){
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide();
  }
};
