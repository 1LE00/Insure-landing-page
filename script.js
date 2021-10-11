
const hamburger = document.getElementById("hamburger");

const hamburgerLinks = document.getElementById("hamburger-links");

const body =document.getElementsByTagName("body")[0];

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("close");
    hamburgerLinks.classList.toggle("show");
    body.classList.toggle("hidden");

});