let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
const textE1 = document.getElementById('text');
const speedE1 = document.getElementById('speed');
const text = "Apply For your eVisa Today"
let idx = 1
let speed = 300 / speedE1.value

writeText()

function writeText(){
    textE1.innerText = text.slice(0, idx)

    idx++

     if(idx > text.length){
        idx = 1
     }
     setTimeout(writeText, speed)
}
speedE1.addEventListener('input', (e) => speed = 1000 / e.target.value);

