function main() {
    const artistasDatos = [
        {
            nombre: "Taylor Swift",
            imagen: "assets/img/taylor_swift.png"
        },
        {
            nombre: "Ed Sheeran",
            imagen: "assets/img/ed_sheeran.png"
        },
        {
            nombre: "Olivia Rodrigo",
            imagen: "assets/img/olivia_rodrigo.png"
        },
        {
            nombre: "Imagine Dragons",
            imagen: "assets/img/imagine_dragons.png"
        },
        {
            nombre: "Justin Bieber",
            imagen: "assets/img/justin_bieber.png"
        },
        {
            nombre: "Shawn Mendes",
            imagen: "assets/img/shawn_mendes.jpg"
        },
        {
            nombre: "Billie Eilish",
            imagen: "assets/img/billie_eilish.png"
        },
        {
            nombre: "Katy Perry",
            imagen: "assets/img/katy_perry.png"
        },
        {
            nombre: "Dua Lipa",
            imagen: "assets/img/dua_lipa.png"
        },
        {
            nombre: "The Chainsmokers",
            imagen: "assets/img/the_chainsmokers.png"
        }
    ];

    const cancionesDatos = [
        {
            nombre: "Blank Space",
            artista: "Taylor Swift",
            imagen: "blank_space.jpg",
            audio: "blank_space.mp3"
        },
        {
            nombre: "Shape of You",
            artista: "Ed Sheeran",
            imagen: "shape_of_you.jpg",
            audio: "shape_of_you.mp3"
        },
        {
            nombre: "drivers license",
            artista: "Olivia Rodrigo",
            imagen: "drivers_license.jpg",
            audio: "drivers_license.mp3"
        },
        {
            nombre: "Believer",
            artista: "Imagine Dragons",
            imagen: "believer.jpg",
            audio: "believer.mp3"
        },
        {
            nombre: "Baby",
            artista: "Justin Bieber",
            imagen: "baby.jpg",
            audio: "baby.mp3"
        },
        {
            nombre: "There's Nothing Holdin' Me Back",
            artista: "Shawn Mendes",
            imagen: "theres_nothing_holdin_me_back.jpg",
            audio: "theres_nothing_holdin_me_back.mp3"
        },
        {
            nombre: "Bad Guy",
            artista: "Billie Eilish",
            imagen: "bad_guy.jpg",
            audio: "bad_guy.mp3"
        },
        {
            nombre: "Roar",
            artista: "Katy Perry",
            imagen: "roar.jpg",
            audio: "roar.mp3"
        },
        {
            nombre: "New Rules",
            artista: "Dua Lipa",
            imagen: "new_rules.jpg",
            audio: "new_rules.mp3"
        },
        {
            nombre: "Closer",
            artista: "The Chainsmokers",
            imagen: "closer.jpg",
            audio: "closer.mp3"
        }
    ];

    const artistasDiv = document.getElementById('artistas');
    const cancionesDiv = document.getElementById('canciones');

    // Paso 1: Mostrar artistas de manera controlada
    // Gina quiere que, de los 10 artistas disponibles, solo se muestren 3 en la pantalla inicial.
    // Una vez se han mostrado los primeros 3 artistas, se deben mostrar los siguientes 3 artistas cuando se complete esta etapa.

    //Funcion para obtener un indice aleatorio
    function getRandomIndex(max, excluido = -1){
        let index = Math.floor(Math.random() * max);
        while (index === excluido){
            index = Math.floor(Math.random() * max);
        }
        return index;
    }

    //Funcion para mostrar los artistas
    function mostrarArtistas(artistas, cantidad, artistasExcluidos) {
        const artistasMostrados = [];
        while (artistasMostrados.length < cantidad) {
            let indice = getRandomIndex(artistas.length);
            // Verificar que el índice no esté en los artistas excluidos
            while (artistasExcluidos.includes(indice)) {
                indice = getRandomIndex(artistas.length);
            }
            artistasMostrados.push(indice);
            artistasExcluidos.push(indice);
            const artista = artistas[indice];
            const elemento = document.createElement('div');
            elemento.innerHTML = `<img src="${artista.imagen}" alt="${artista.nombre}">`;
            artistasDiv.appendChild(elemento);
        }
    }    

    //Mostrar 3 artistas aleatorios
    const artistasExcluidos = [];
    mostrarArtistas(artistasDatos, 3, artistasExcluidos);

    //Mostrar artistas despues de un tiempo (esta funcion es temporal xd)
    setTimeout(function(){
        artistasDiv.innerHTML = '';
        mostrarArtistas(artistasDatos, 3, artistasExcluidos);
    }, 5000);



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