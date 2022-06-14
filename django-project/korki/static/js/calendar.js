const popup__icon = document.querySelector(".icon_calendar");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const url = window.location.href;
console.log(popup);
console.log(url);

if(url.indexOf('?')>-1)
{
    popup.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

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
