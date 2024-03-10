function main() {
    const puntajesTable = document.getElementById('puntajesTable');
    const puntajes = JSON.parse(localStorage.getItem('puntajes'));
    if (puntajes) {
        puntajes.sort((a, b) => b.tiempo - a.tiempo);
        
        puntajes.forEach((puntaje) => {
            const tr = document.createElement('tr');
            const tdNombre = document.createElement('td');
            const tdPuntaje = document.createElement('td');
            const tdTiempo = document.createElement('td');
            tdNombre.textContent = puntaje.nombre;
            tdPuntaje.textContent = puntaje.puntaje;
            tdTiempo.textContent = puntaje.tiempo;
            tr.appendChild(tdNombre);
            tr.appendChild(tdPuntaje);
            tr.appendChild(tdTiempo);
            puntajesTable.appendChild(tr);
        });
    }

    const volverBtn = document.getElementById('volverBtn');
    volverBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = irAPaginaHTMLRelativoAURLPrimaria('index');
    });
}

window.onload = main;
