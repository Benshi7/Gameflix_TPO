
console.log("Este log está probando que detecte el Js")

//  Variables que contienen los datos de los juegos y sus respectivas imágenes


let nombres = ["Metal Gear Solid 3", "Farcry 6", "Battlefield 1", "Halo 2", "Apex Legends", "League of Legends", "Pes 2021", "Rocket League", "Mafia 3", "Fortnite", "CS: GO"]
let imagenes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

//------------

let nombre = nombres[0]


function crearJuego() {
  for (let index = 0; index < nombres.length; index++) {
    const nombrePeli = nombres[index]
    const imagenPeli = "../assets/img-" + imagenes[index] + ".jpg"

    document.getElementById("wrapperGen").innerHTML += '<div class="contentPeli"><img src="' + imagenPeli + '"><h3 onclick="abrirInfo"> Jugar ' + nombrePeli + '</h3></div>'

  }
}

crearJuego()

