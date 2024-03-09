function main() {
    const artistasDatos = [
        {
            nombre: "Taylor Swift",
            imagen: "taylor_swift.jpg",

        }
    ]

    const cancionesDatos = [
        {
            nombre: "Blank Space",
            artista: "Taylor Swift",
            imagen: "blank_space.jpg",
            audio: "blank_space.mp3"
        }
    ]

    const artistasDiv = document.getElementById('artistas');
    const cancionesDiv = document.getElementById('canciones');


    // Paso 1: Mostrar artistas de manera controlada
    // Gina quiere que, de los 10 artistas disponibles, solo se muestren 3 en la pantalla inicial.
    // Una vez se han mostrado los primeros 3 artistas, se deben mostrar los siguientes 3 artistas cuando se complete esta etapa.
    // El como ocultar y mostrar, ya se ha hecho en una tarea de Gina, la de canvas.

    // Paso 2: Redirección a la pantalla de felicitaciones
    // Una vez completados los 6 artistas, Gina desea redirigir al usuario a la pantalla de felicitaciones.

    // Paso 3: Utilización de la variable de puntos
    // La variable de puntos indica el progreso del usuario. Por ejemplo, si hay 6 puntos, se han completado los 6 artistas.
    // Si hay 3 puntos, significa que se deben mostrar los siguientes 3 artistas.

    // Paso 4: Implementación de la lógica en el evento 'ondrop'
    // En el evento 'ondrop' de los artistas, debemos verificar el valor de la variable de puntos.
    // Si la variable es 3, debemos ocultar los primeros 3 artistas y mostrar los siguientes 3.
    // Si la variable es 6, debemos redirigir al usuario a la pantalla de felicitaciones.

    // Paso 5: Redirección entre pantallas
    // Para redirigir entre pantallas, podemos consultar el archivo 'menu_juego.js', donde se encuentra el código para redirigir a la pantalla de juego.

    // Paso 6: Barajar elementos de un array
    // Si necesitamos barajar los artistas, podemos aprender cómo hacerlo en este enlace: https://stackoverflow.com/questions/44103793/how-does-this-w3schools-code-for-shuffling-an-array-with-sort-work
    let puntos = 0;


    // Vamos a analizar paso a paso lo que queremos lograr en nuestro código.

    // Paso 1: Dividir la interfaz en secciones
    // Tenemos dos divisiones (divs) en nuestra interfaz: una para los artistas y otra para las canciones.

    // Paso 2: Organización de los datos
    // Todos nuestros datos están organizados como objetos, lo que facilita su manejo y manipulación.

    // Paso 3: Creación de los elementos HTML dinámicamente
    // Para representar visualmente nuestros datos, necesitamos crear elementos HTML dinámicamente.
    // Utilizaremos un bucle 'for' para recorrer nuestros objetos y generar los elementos necesarios dentro de los divs correspondientes.
    // Tambien es posible usar el metodo 'forEach' para recorrer los objetos.
    // Puedes aprender más sobre cómo manipular elementos HTML con JavaScript en este enlace: https://www.w3schools.com/js/js_htmldom_nodes.asp

    // Paso 4: Hacer los elementos arrastrables
    // Es importante que los elementos de la sección de canciones sean arrastrables.
    // Para lograrlo, debemos agregar la propiedad 'draggable' a estos elementos.
    // Puedes encontrar más información sobre cómo implementar la funcionalidad de arrastrar y soltar en este enlace: https://www.w3schools.com/html/html5_draganddrop.asp
    // También te recomiendo ver los siguientes tutoriales en YouTube:
    // 1. https://www.youtube.com/watch?v=UAkCVwhzaG4
    // 2. https://www.youtube.com/watch?v=wP-yu5cDtNc

    // Paso 5: Entender la transferencia de datos
    // Durante la interacción de arrastrar y soltar, es fundamental comprender cómo se transfieren los datos entre los elementos.
    // Este concepto se conoce como "data transfer" y es esencial para nuestra aplicación.
    // Puedes aprender más sobre esto en este enlace: https://www.w3schools.com/html/html5_draganddrop.asp
    // o viendo los videos de YouTube que te recomendé en el paso 4.

    // Paso 6: Verificación de la corrección del artista
    // Un desafío clave en nuestra aplicación es determinar si el artista seleccionado es el correcto o no.
    // Para abordar esto, agregaremos datos a los divs que representan a los artistas.
    // Puedes aprender cómo hacerlo en este enlace: https://www.w3schools.com/tags/att_data-.asp
    // Luego, en el evento 'ondrop', comprobaremos si el artista seleccionado es el correcto comparando los datos.

    // Paso 7: Implementación del código
    // Aquí te dejo un ejemplo de cómo podríamos hacer la verificación del artista:

    // div.ondrop = function (event) {
    // event.preventDefault();
    // const artistaArrastrado = event.dataTransfer.getData('artista');
    // if (artistaArrastrado === div.dataset.artista) {
    // alert('¡Correcto!');
    // } else {
    // alert('¡Incorrecto!');
    // }
    // };
    // A programar!
}

window.onload = main;