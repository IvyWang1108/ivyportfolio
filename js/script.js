// /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()


  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;

};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// another experiment: auto rolling and able to select from list

// var t;
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
//   clearTimeout(t);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
//   clearTimeout(t);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("project-dot");
//   if (n > slides.length) {slideIndex = 1} //go back to first image when reach end
//   if (n < 1) {slideIndex = slides.length} //never let slideIndex go below 1
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   if (n == undefined) {n = ++slideIndex;}
//   if (slideIndex > slides.length) {slideIndex = 1}  
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   t = setTimeout(showSlides, 3000);
// }

// end of old exp.

// another experiment: auto cycling images and able to select from list 
// with restart timer

var i;
// var slides = document.getElementsByClassName("mySlides");
// var dots = document.getElementsByClassName("project-dot");
let slideIndex = -1;
showSlides(slideIndex);
var repeater;


function showSlides() {

  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("project-dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  } // cycle through and hide all the images

  slideIndex++;


  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex <= 0) {
    slideIndex = slides.length;
  } // what to do if slideIndex is too high or too low

  slides[slideIndex - 1].style.display = "block";
  // show the relevant slide

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function cycle(r) {

  if (r) { // if r is true then clear and restart the timer
    clearInterval(repeater); // clear the timer
    repeater = setInterval(function() { // start the timer
      showSlides();
    }, 3000);
  } else {
    clearInterval(repeater); // clear and stop the timer if r isn't true
  }
}

window.onload = function() {
  showSlides();
}; // show the start image on load

showSlides();
cycle(true);


function plusSlide(n) {
  cycle(true);
  // slideIndex += n - 1;
  showSlides(slideIndex += n-1);
  // carousel();
}

function currentSlide(n) {
  cycle(true);
  // slideIndex = n - 1;
  showSlides(slideIndex = n-1);
  // carousel();
}

// -------------------



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-150px";
//   }
//   prevScrollpos = currentScrollPos;
// } 


highlight();

$(window).on("scroll", function() {
  highlight();
});

function highlight() {
  var scroll = $(window).scrollTop();
  var height = $(window).height();

  $(".highlight").each(function() {
    var pos = $(this).offset().top;
    if (scroll + height >= pos) {
      $(this).addClass("active");
    }
    console.log(pos);
    console.log(scroll);
  });
}













