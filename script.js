// Navbar toggle
const menuToggle=document.getElementById("menu-toggle");
const navLinks=document.getElementById("nav-links");
menuToggle.onclick=()=>{navLinks.classList.toggle("show");}

// Scroll to projects
function scrollToProjects(){
document.getElementById('projects').scrollIntoView({behavior:'smooth'});
}

// Load quiz questions from localStorage
let questions=JSON.parse(localStorage.getItem("questions"))||[];