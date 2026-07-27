const popup = document.getElementById("portfolioPopup");

const closePopup = document.getElementById("closePopup");

const popupOk = document.getElementById("popupOk");

document.querySelectorAll("a, button").forEach(item => {

    item.addEventListener("click", function(e){

        if(
            item.id === "closePopup" ||
            item.id === "popupOk"
        ){
            return;
        }

        if(
            item.classList.contains("menu-btn")
        ){
            return;
        }

        e.preventDefault();

        popup.classList.add("active");

    });

});

closePopup.onclick = () => {

    popup.classList.remove("active");

};

popupOk.onclick = () => {

    popup.classList.remove("active");

};

popup.onclick = (e)=>{

    if(e.target===popup){

        popup.classList.remove("active");

    }

};