function main() {
    const jugarBtn = document.getElementById('jugarBtn');
    jugarBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = irAPaginaHTMLRelativoAURLPrimaria('menu_juego');
    });
}

window.onload = main;