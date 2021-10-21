const btnSwitch = document.querySelector("#switch");
const nav = document.querySelector("#nav")

btnSwitch.addEventListener("click", function(){
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
    nav.classList.toggle("bg-light");
    nav.classList.toggle("bg-dark");
    nav.classList.toggle("navbar-light");
    nav.classList.toggle("navbar-dark");
}