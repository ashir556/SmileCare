const modal = document.getElementById("demoModal");

const openButtons = document.querySelectorAll(".open-demo-modal");

const closeButton = document.querySelector(".close-modal");

openButtons.forEach(button => {

    button.addEventListener("click", () => {

        modal.style.display = "flex";

    });

});

closeButton.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});
// ================= SCROLL ANIMATION =================

const hiddenElements = document.querySelectorAll(
    ".hero, .why-us, .services, .doctors"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;

            let current = 0;
            const increment = Math.max(1, Math.ceil(target / 100));

            const updateCounter = () => {

                current += increment;

                if (current >= target) {

                    counter.innerText = target.toLocaleString() + "+";

                } else {

                    counter.innerText = current.toLocaleString();

                    requestAnimationFrame(updateCounter);

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => counterObserver.observe(counter));
// ================= TESTIMONIAL SLIDER =================

const testimonials = document.querySelectorAll(".testimonial");

let currentTestimonial = 0;

function showTestimonial(index){

    testimonials.forEach(card => {

        card.classList.remove("active");

    });

    testimonials[index].classList.add("active");

}

setInterval(() => {

    currentTestimonial++;

    if(currentTestimonial >= testimonials.length){

        currentTestimonial = 0;

    }

    showTestimonial(currentTestimonial);

},4000);
// ================= FAQ =================

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.nextElementSibling;

        const icon = button.querySelector("span");

        if(answer.style.maxHeight){

            answer.style.maxHeight = null;

            icon.textContent = "+";

        }else{

            answer.style.maxHeight = answer.scrollHeight + "px";

            icon.textContent = "−";

        }

    });

});
// ================= THEME TOGGLE =================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeToggle.textContent = "☀️";

    }else{

        themeToggle.textContent = "🌙";

    }

});