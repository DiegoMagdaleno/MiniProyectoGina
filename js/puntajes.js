function main() {
    const puntajesTable = document.getElementById('puntajesTable');
    const puntajes = JSON.parse(localStorage.getItem('puntajes'));
    if (puntajes) {
        puntajes.sort((a, b) => a.tiempo - b.tiempo);

        for (let i = 0; i < puntajes.length; i++) {
            if (puntajes[i].puntaje === 0) {
                puntajes.splice(i, 1);
                i--;
            }
        }

        puntajes.forEach((puntaje) => {
            const tr = document.createElement('tr');
            const tdNombre = document.createElement('td');
            const tdTiempo = document.createElement('td');
            const tdPuntaje = document.createElement('td');
            tdNombre.textContent = puntaje.nombre;
            
            const minutos = Math.floor(puntaje.tiempo / 60);
            const segundos = puntaje.tiempo % 60;
            tdPuntaje.textContent = puntaje.puntaje;
            tdTiempo.textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
            
            tr.appendChild(tdNombre);
            tr.appendChild(tdTiempo);
            tr.appendChild(tdPuntaje);
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
