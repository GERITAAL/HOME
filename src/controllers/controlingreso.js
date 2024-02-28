//declarando variables con js desde el dom

let usuarioBaseDatos="gerabema"
let contraseñaBaseDatos="12345"
let correoBaseDatos="n/a@gmail.com"

let botonFormulario=document.getElementById("botonIngreso")
let cajaFormularioNombre=document.getElementById("nombre")
let cajaFormularioEmail=document.getElementById("email")
let cajaFormularioPassword=document.getElementById("password")

// DETECTANDO EVENTOS CON JS

botonFormulario.addEventListener("click",function(evento){
    evento.preventDefault()
    //1.capturamos la info del formulario
    let nombreUsuario=cajaFormularioNombre.value

    let correoUsuario=cajaFormularioEmail.value

    let contraseñaUsurio=cajaFormularioPassword.value
    
    // validando los datos del usurio

    if(usuarioBaseDatos==nombreUsuario){
        Swal.fire({
            title: "Bienvenido "+nombreUsuario,
            text: "tus credenciales son correctas",
            icon: "success"
          })

          window.location.href="./src/views/home.html"

    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Verifica tus credenciales",
            
          })

    }
    
})

/*cajaFormularioNombre.addEventListener("click", function(){
    alert("escribe tu nombre")
})

cajaFormularioEmail.addEventListener("click", function(){
    alert("escribe tu correo")
})

cajaFormularioPassword.addEventListener("click", function(){
    alert("escribe tu contraseña")
})*/
