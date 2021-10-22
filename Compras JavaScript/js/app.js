// Modo Oscuro
const btnSwitch = document.querySelector("#switch");
const nav = document.querySelector("#nav")

btnSwitch.addEventListener("click", function(){
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
    nav.classList.toggle("bg-light");
    nav.classList.toggle("bg-dark");
    nav.classList.toggle("navbar-light");
    nav.classList.toggle("navbar-dark");
})

// Login
function iniciarSesion(){
    let usuario = document.getElementById('user').value
    let contraseña = document.getElementById('password').value

    if(usuario == 'juan' && contraseña == '123'){
        window.location = "index.html";
    }else{
        alert("su usuario es incorecto")
    }
}

// Contacto
function enviarFormulario(){
    alert("su consulta fue enviada con exito")
}




