const popup__icon = document.querySelector(".icon_calendar");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");

console.log(popup);

popup__icon.addEventListener("click",function(e){
    e.preventDefault();
    popup.classList.toggle("hidden");
    overlay.classList.toggle("hidden");

})

overlay.addEventListener("click",function(e){
    e.preventDefault();
    if(!popup.classList.contains("hidden"))
    {
        popup.classList.toggle("hidden");
        overlay.classList.toggle("hidden");
    }
})