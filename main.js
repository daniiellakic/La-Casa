//////////////////////// Toggle menu ////////////////////////
var toggle = document.querySelector('.toggle');
var navigation = document.querySelector('.navigation');

toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
});
//////////////////////////////////////////////////////////////////////// 


////////////////////////// Close navbar on click ///////////////////////////////  
function closeNav() {
    navigation.classList.remove('active');
    toggle.classList.remove('active');
}

//////////////////////// //////////////////////////////////////////////// 
window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
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

//////////////////////// //////////////////////////////////////////////// 

//open booking page
function openBooking() {
    window.location.href = "#booking";
}

//open contact page
function openContact() {
    window.location.href = "#contact";
}

//open pdf file
function openFood() {
    window.open("../img/La casa huvudmeny.pdf");
}

function openDesert() {
    window.open("../img/La casa Desert.pdf");
}

function openDrink() {
    window.open("../img/La casa dryck.pdf");
}


function openBook() {
    window.open("../#booking");
}

function openAbout() {
    window.open("../#about");
}

function openMeny() {
    window.open("../#meny");
}

function openContact() {
    window.open("../#footerId");
}

let slideIndex = 1;
showSlides(slideIndex);


////////////////////////  Next/previous controls //////////////////////// 
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
////////////////////////// Sideshow  //////////////////////// 

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

document.addEventListener("click", (e) => {
    if (e.target == navEl) {
        navEl.classList.remove("active");
    }
});

/////////////////////////  Sslideshow images changes every 3 seconds ///////////////////////// 


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");

    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}
var timer = setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
}, 3000);

/////////////////////// /////////////////////// //////////////////////