let nJugadores = prompt("ingrese cantidad de jugadores: 2 a 6");
let tiempo = prompt("ingrese tiempo en segundos");

iniciarJuego(nJugadores,tiempo)

function iniciarJuego(nJugadores,tiempo){
    const jugadores = [];
const colores = ["Rojo", "Azul", "Verde", "Amarillo","Violeta","Naranja"]
let turnoJugador = 0;

class Jugador {
    constructor(color, tiempo) {
        this.color = color;
        this.tiempo = tiempo;
    }
}

for (let index = 0; index < nJugadores; index++) {
    jugadores[index] = new Jugador(colores[index], tiempo);
}


const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let renderizar = "";

let cronometro = null;
function iniciarCronometro() {
    if (turnoJugador > nJugadores - 1) turnoJugador = 0;
    if (jugadores[turnoJugador] && jugadores[turnoJugador].tiempo > 0) {
        document.querySelectorAll(".letra").forEach( (element) => element.className = `letra ${jugadores[turnoJugador].color}`)
        cronometro = setInterval(() => {
            document.querySelector(".cronometro").textContent = jugadores[turnoJugador].tiempo;
            if (jugadores[turnoJugador].tiempo == 0) {
                document.querySelector(".cronometro").textContent = `${jugadores[turnoJugador].color} eliminado`;
                setTimeout(()=> {frenarCronometro();
                iniciarCronometro()}, 900 );
            };
            jugadores[turnoJugador].tiempo--
        }, 1000)
    }
    else {
        turnoJugador++
        iniciarCronometro();
    }
}

function frenarCronometro() {
    clearInterval(cronometro);
    cronometro = null;
}

iniciarCronometro();


function seleccionar(letra) {
    turnoJugador++
    frenarCronometro();
    //document.querySelector(".seleccionada").innerHTML = `<div class="letra letraSel">${letra}</div>`
    //document.querySelector(".seleccionada").addEventListener("click", () => )
    document.getElementById(letra).remove();
    iniciarCronometro();
};

alfabeto.forEach((letra) => renderizar += `<div class="letra" id="${letra}">${letra}</div>`);

document.querySelector(".contenedor-letras").innerHTML = renderizar;

alfabeto.forEach((letra) => document.getElementById(letra).addEventListener("click", () => {
    seleccionar(letra)
}));
}