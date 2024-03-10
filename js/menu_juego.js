function main() {
    const btnIngresar = document.getElementById('ingresarBtn');
    btnIngresar.addEventListener('click', () => {
        //1. Verificar que el usuario haya ingresado un nombre
        const NombreUsuario = document.getElementById('nombreInput').value;
        if(!NombreUsuario){
            mensajeError.textContent = 'Por favor ingresa tu nombre para saber que gran conocedor de la música eres!';
            return;
        }else{
            mensajeError.textContent = '';
        }

        //2. Guardar el nombre del usuario en el local storage
        let nombreGuardado = localStorage.getItem('nombre');
        if (!nombreGuardado) {
            nombreGuardado = '';
        }
        if (nombreGuardado !== NombreUsuario) {
            nombreGuardado = NombreUsuario;
            localStorage.setItem('nombre', nombreGuardado);
            console.log('Se guardó en la consola log');
        }

        //3. Redirigir al usuario a la página del juego
        window.location.href = irAPaginaHTMLRelativoAURLPrimaria('juego');
    });
}

window.onload = main;
