function main() {
    const state = getState();
    const nombreJugador = document.getElementById('nombreJugador');
    nombreJugador.textContent = state.nombre;

    const puntajes = JSON.parse(localStorage.getItem('puntajes'));
    let index = -1;
    for (let i = 0; i < puntajes.length; i++) {
        if (puntajes[i].nombre === state.nombre) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        if (state.puntaje > puntajes[index].puntaje) {
            puntajes[index].puntaje = state.puntaje;
            puntajes[index].tiempo = state.tiempo;
        }
    } else {
        puntajes.push({
            nombre: state.nombre,
            puntaje: state.puntaje,
            tiempo: state.tiempo
        });
    }

    const repetirBtn = document.getElementById('repetirBtn');
    repetirBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resetStatePartial();
        window.location.href = irAPaginaHTMLRelativoAURLPrimaria('juego');
    });

    const volverBtn = document.getElementById('volverBtn');
    volverBtn.addEventListener('click', (e) => {
        e.preventDefault();
        clearState();
        window.location.href = irAPaginaHTMLRelativoAURLPrimaria('index');
    });


}

window.onload = main;
