// ======================
// MOBILE MENU
// ======================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// ======================
// PORTFOLIO POPUP
// ======================

const popup = document.getElementById("portfolioPopup");
const closePopup = document.getElementById("closePopup");
const popupOk = document.getElementById("popupOk");

// Select every link and button except popup controls
const buttons = document.querySelectorAll("a, button");

buttons.forEach(btn => {

    btn.addEventListener("click", function (e) {

        // Ignore popup close buttons
        if (
            btn.id === "closePopup" ||
            btn.id === "popupOk"
        ) {
            return;
        }

        // Stop link from jumping to top
        e.preventDefault();

        // Show popup
        if (popup) {
            popup.classList.add("active");
        }

    });

});

// Close popup
if (closePopup) {
    closePopup.addEventListener("click", () => {
        popup.classList.remove("active");
    });
}

if (popupOk) {
    popupOk.addEventListener("click", () => {
        popup.classList.remove("active");
    });
}

// Close when clicking outside
if (popup) {
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.remove("active");
        }
    });
}