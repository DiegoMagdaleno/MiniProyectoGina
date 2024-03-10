function main() {
    const btnIngresar = document.getElementById('ingresarBtn');

    const form = document.getElementById('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    const input = document.getElementById('nombreInput');
    input.addEventListener('input', () => {
        mensajeError.textContent = '';
    });

    const regresarBtn = document.getElementById('regresarBtn');

    regresarBtn.addEventListener('click', () => {
        window.location.href = irAPaginaHTMLRelativoAURLPrimaria('index');
    });

    btnIngresar.addEventListener('click', () => {

        const nombreUsuario = document.getElementById('nombreInput').value;
        if (!nombreUsuario) {
            mensajeError.textContent = 'Por favor ingresa tu nombre para saber que gran conocedor de la música eres!';
            return;
        } else {
            mensajeError.textContent = '';
        }

        const modal = document.getElementById('modal');

        let puntajes = JSON.parse(localStorage.getItem('puntajes'));
        if (!puntajes) {
            puntajes = [];
        }

        for (let i = 0; i < puntajes.length; i++) {
            if (puntajes[i].nombre === nombreUsuario) {

                const modalContent = document.getElementById('modalContent');
                modal.style.display = 'block';
                while (modalContent.firstChild) {
                    modalContent.removeChild(modalContent.firstChild);
                }
                const title = document.createElement('h1');
                title.textContent = '¡Bienvenido de vuelta, ' + nombreUsuario + '!';
                modalContent.appendChild(title);
                const subtitle = document.createElement('h2');
                subtitle.textContent = '¿Listo para batir tu record?';
                modalContent.appendChild(subtitle);

                const recordInfo = document.createElement('div');
                recordInfo.classList.add('record-info');
                const mejorPuntuacion = document.createElement('h3');
                mejorPuntuacion.textContent = 'Mejor puntacion: ' + puntajes[i].puntaje + ' puntos';

                const mejorTiempo = document.createElement('h3');
                mejorTiempo.textContent = 'Mejor tiempo: ' + puntajes[i].tiempo;

                recordInfo.appendChild(mejorTiempo);
                recordInfo.appendChild(mejorPuntuacion);
                modalContent.appendChild(recordInfo);

                const btnDiv = document.createElement('div');
                btnDiv.style.display = 'flex';
                btnDiv.style.justifyContent = 'center';
                btnDiv.style.width = '100%';
                modalContent.appendChild(btnDiv);

                const btnCerrar = document.createElement('button');
                btnCerrar.textContent = 'Cerrar';
                btnCerrar.setAttribute('data-icon', "✖");
                btnCerrar.classList.add('button');
                btnCerrar.classList.add('rounded');
                btnCerrar.classList.add('pink');
                btnCerrar.classList.add('glossy');

                btnCerrar.addEventListener('click', () => {
                    modal.style.display = 'none';
                });

                btnDiv.appendChild(btnCerrar);

                const btnJugar = document.createElement('button');
                btnJugar.textContent = 'Jugar';
                btnJugar.setAttribute('data-icon', "▶");
                btnJugar.classList.add('button');
                btnJugar.classList.add('rounded');
                btnJugar.classList.add('orange');
                btnJugar.classList.add('glossy');

                btnJugar.addEventListener('click', () => {
                    setState(puntajes[i]);
                    window.location.href = irAPaginaHTMLRelativoAURLPrimaria('juego');
                });

                btnDiv.appendChild(btnJugar);
                return;
            }
        }

        const jugador = {
            nombre: nombreUsuario,
            puntaje: 0,
            tiempo: 0,
        };

        const modalContent = document.getElementById('modalContent');
        modal.style.display = 'block';
        while (modalContent.firstChild) {
            modalContent.removeChild(modalContent.firstChild);
        }

        const title = document.createElement('h1');
        title.textContent = '¡Bienvenido, ' + nombreUsuario + '!';
        modalContent.appendChild(title);

        const subtitle = document.createElement('h2');
        subtitle.textContent = '¿Listo para demostrar tus conocimientos?';

        modalContent.appendChild(subtitle);

        const btnDiv = document.createElement('div');
        btnDiv.style.display = 'flex';
        btnDiv.style.justifyContent = 'center';
        btnDiv.style.width = '100%';
        modalContent.appendChild(btnDiv);

        const btnCerrar = document.createElement('button');
        btnCerrar.textContent = 'Cerrar';
        btnCerrar.setAttribute('data-icon', "✖");
        btnCerrar.classList.add('button');
        btnCerrar.classList.add('rounded');
        btnCerrar.classList.add('pink');
        btnCerrar.classList.add('glossy');

        btnCerrar.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        btnDiv.appendChild(btnCerrar);

        const btnJugar = document.createElement('button');
        btnJugar.textContent = 'Jugar';
        btnJugar.setAttribute('data-icon', "▶");
        btnJugar.classList.add('button');
        btnJugar.classList.add('rounded');
        btnJugar.classList.add('orange');
        btnJugar.classList.add('glossy');

        btnJugar.addEventListener('click', () => {
            window.location.href = irAPaginaHTMLRelativoAURLPrimaria('juego');
            puntajes.push(jugador);
            setState(jugador);
        });

        btnDiv.appendChild(btnJugar);
    });
}

window.onload = main;
