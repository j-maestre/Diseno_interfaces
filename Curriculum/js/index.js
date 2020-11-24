function docReady(fn,slideIndex) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn(slideIndex), 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}  
let slideIndex = 1;

docReady(showSlides,slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
interval();

function interval(){
  setInterval(function(){
      plusSlides(1);
    }, 5000);
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

function contactMe(contact = true){
  if(contact){
    document.getElementById("contactSection").hidden=false;
    document.getElementById("center").hidden=true;
  }else{
    document.getElementById("contactSection").hidden=true;
    document.getElementById("center").hidden=false;
  }
}

function sendEmail(){
  alert("Done!");
  contactMe(false);
}


