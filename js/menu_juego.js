
function main() {
    const btnIngresar = document.getElementById('ingresarBtn');
    btnIngresar.addEventListener('click', () => {
        // Redigir a la pagina de juego, pero antes
        // 1. Verificar que el usuario haya ingresado un nombre
        // 2. Ver si el nombre esta el localStorage, si no esta, agregarlo
        // 3. Redirigir a la pagina de juego
        //
        // Aqui ya se hizo el paso 3
        window.location.href = irAPaginaHTMLRelativoAURLPrimaria('juego');
    });
}

window.onload = main;