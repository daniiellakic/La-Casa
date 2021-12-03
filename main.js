/*

//Sticky Navbar
window.onscroll = function() {myFunction();};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("#sticky");
  } else {
    navbar.classList.remove("#sticky");
  }
}

*/

//Selectors
const slideshowSlide = document.querySelector('.slideshow-slide');
const slideshowImages = document.querySelectorAll('.slideshow-slide img');

//buttons 
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

//counter
let counter = 1;
const size = slideshowImages[0].clientWidth;

slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Event Listeners
nextBtn.addEventListener('click', () => {
    if (counter >= slideshowImages.length - 1) return;
    slideshowSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    slideshowSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// event Listeners for transition  
slideshowSlide.addEventListener('transitionend', () => {
    if (slideshowImages[counter].id === 'lastClone') {
        slideshowSlide.style.transition = "none";
        counter = slideshowImages.length - 2;
        slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (slideshowImages[counter].id === 'firstClone') {
        slideshowSlide.style.transition = "none";
        counter = slideshowImages.length - counter;
        slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
} );

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});


