// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("show");

    });

}

// ==========================
// SCROLL REVEAL
// ==========================

const reveals=document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const top=section.getBoundingClientRect().top;

        const windowHeight=window.innerHeight;

        if(top<windowHeight-120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealSections);

revealSections();