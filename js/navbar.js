let navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", mynavtoggle);

function mynavtoggle() {
  navToggler.classList.toggle("active");
  const nav = document.querySelector(".nav");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    nav.removeAttribute("style");
  }
}



var navbtns = document.getElementsByClassName("nav-btn");
for (var i = 0; i < navbtns.length; i++) {
navbtns[i].addEventListener("click", function() {
var current = document.getElementsByClassName("active");
current[0].className = current[0].className.replace(" active", "");
this.className += " active";
});
}