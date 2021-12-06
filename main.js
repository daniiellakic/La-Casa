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



var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


