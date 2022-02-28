window.onscroll = function() {myFunction()};
  
    var navbar = document.getElementById( "navbar");
    var sticky = navbar.offsetTop;
  
    /* Function to stick the nav bar */
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        }
        else {
            navbar.classList.remove("sticky");
        }
    }



 
  //Toggle menu
 
const icon = document.getElementsByClassName('icon')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

icon.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});



const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});


