// Login
function iniciarSesion(){
    let usuario = document.getElementById('user').value
    let contraseña = document.getElementById('password').value

    if(usuario == 'juan' && contraseña == '123'){
        window.location.replace('./index.html');
    }else{
        document.getElementById('errorLogin').classList.remove('login');
    }
}

// Contacto
// function submit(){
//     document.getElementById('botonSubmit').classList.remove('alerta');
// }




