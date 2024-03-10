function main() {
    const jugarBtn = document.getElementById('jugarBtn');
    jugarBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = irAPaginaHTMLRelativoAURLPrimaria('menu_juego');
    });

    const instruccionesBtn = document.getElementById('instruccionesBtn');
    instruccionesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = irAPaginaHTMLRelativoAURLPrimaria('instrucciones');
    });

    const puntajesBtn = document.getElementById('puntajesBtn');
    puntajesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = irAPaginaHTMLRelativoAURLPrimaria('puntajes');
    });

    const creditosBtn = document.getElementById('creditosBtn');
    creditosBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = irAPaginaHTMLRelativoAURLPrimaria('creditos');
    });
}

window.onload = main;