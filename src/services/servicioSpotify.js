// consumiendo apis con js


//1. para donde vas (almaceno en una variable la URI del servicio)
let URI="https://api.spotify.com/v1/artists/5dbaLmK5SHLLg8Z4CcTJpX/top-tracks?market=US"

//2. que vas a hacer? (metodo http)
let metodo="GET"

//3. tenes permisos? (configuarar peticiones)
let token="BQBGgKchpiE8_6c2EItKFtELvDtbEJ_8T7jvhCr-snhoa7qCxaKAN7bUZZ0_uFG_ECfjAD62DswYalOHGqZ_kOSUL8GoXYfnog6YPuaaW01KozwhwWA"

let peticion={
    method:metodo,
    headers:{
        "Authorization":token
    }
}


//4. valla pues traigame algo (promesa)

fetch(URI,peticion)
.then(function(respuestaServidor){return respuestaServidor.json}) // linea para indicar que hago si todo esta bien
.then(function(respuestaJson){
    console.log(respuestaJson)
})
.catch(function(respuestaError){
    console.log(respuestaError)
}) //linea para indicar que hago si lago fallo
