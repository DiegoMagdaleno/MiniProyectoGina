function main() {
    const state = getState();
    const nombreJugador = document.getElementById('nombreJugador');
    nombreJugador.textContent = state.nombre;

    const puntajes = JSON.parse(localStorage.getItem('puntajes'));

    if (!puntajes) {
        localStorage.setItem('puntajes', JSON.stringify([]));
    }

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

    const puntaje = document.getElementById('puntajeNumero');
    puntaje.textContent = state.puntaje + ' puntos';

    const tiempo = document.getElementById('tiempoNumero');
    const minutos = Math.floor(state.tiempo / 60);
    const segundos = state.tiempo % 60;
    tiempo.textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

    localStorage.setItem('puntajes', JSON.stringify(puntajes));

}

window.onload = main;
