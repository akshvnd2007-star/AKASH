let index=0;
const slides=document.getElementById("slides");
const totalSlides = slide.children.length;
function showSlide(){
slides.style.transform = `translateX(-${index * 500}px)`;
}
function nextSlide(){
index = (index + 1) % totalSlides;
showSlide();
}
function prevSlide(){
index = (index - 1 + totalSlides) % totalSlides;
showSlide();
