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
            imagen: "assets/img/shawn_mendes.png"
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
            imagen: "assets/img/blank_space.jpg",
            audio: "blank_space.mp3"
        },
        {
            nombre: "Shape of You",
            artista: "Ed Sheeran",
            imagen: "assets/img/shape_of_you.png",
            audio: "shape_of_you.mp3"
        },
        {
            nombre: "drivers license",
            artista: "Olivia Rodrigo",
            imagen: "assets/img/drivers_license.jpg",
            audio: "drivers_license.mp3"
        },
        {
            nombre: "Believer",
            artista: "Imagine Dragons",
            imagen: "assets/img/believer.jpg",
            audio: "believer.mp3"
        },
        {
            nombre: "Baby",
            artista: "Justin Bieber",
            imagen: "assets/img/baby.jpg",
            audio: "baby.mp3"
        },
        {
            nombre: "There's Nothing Holdin' Me Back",
            artista: "Shawn Mendes",
            imagen: "assets/img/theres_nothing_holdin_me_back.jpg",
            audio: "theres_nothing_holdin_me_back.mp3"
        },
        {
            nombre: "Bad Guy",
            artista: "Billie Eilish",
            imagen: "assets/img/bad_guy.jpg",
            audio: "bad_guy.mp3"
        },
        {
            nombre: "Roar",
            artista: "Katy Perry",
            imagen: "assets/img/roar.jpg",
            audio: "roar.mp3"
        },
        {
            nombre: "New Rules",
            artista: "Dua Lipa",
            imagen: "assets/img/new_rules.jpg",
            audio: "new_rules.mp3"
        },
        {
            nombre: "Closer",
            artista: "The Chainsmokers",
            imagen: "assets/img/closer.jpg",
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
    function mostrarArtistasAleatoriosExcluyendo(artistas, cantidad, artistasExcluidos) {
        const artistasMostrados = [];
        const cancionesMostradas = []; // Para hacer un seguimiento de las canciones mostradas
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
            elemento.innerHTML = `
                <img src="${artista.imagen}" alt="${artista.nombre}">
                <p>${artista.nombre}</p>`;
            artistasDiv.appendChild(elemento);

            // Mostrar canciones correspondientes al artista
            const cancionesArtista = cancionesDatos.filter(cancion => cancion.artista === artista.nombre);
            cancionesArtista.forEach(cancion => {
                const cancionElemento = document.createElement('div');
                cancionElemento.innerHTML = `
                    <img src="${cancion.imagen}" alt="${cancion.nombre}">
                    <p>${cancion.nombre}</p>
                `;
                cancionesDiv.appendChild(cancionElemento);
                cancionesMostradas.push(cancionElemento); // Guardar la referencia del elemento de la canción mostrada
            });
        }
        // Devolver la referencia de las canciones mostradas
        return cancionesMostradas;
    }

    // Paso 1: Mostrar 3 artistas aleatorios y sus respectivas canciones
    const artistasExcluidos = [];
    const cancionesMostradasPrimerPaso = mostrarArtistasAleatoriosExcluyendo(artistasDatos, 3, artistasExcluidos);

    // Paso 2: Mostrar otras 3 artistas aleatorios después de un tiempo
    setTimeout(function() {
        // Limpiar los artistas y sus canciones mostradas en el primer paso
        artistasDiv.innerHTML = '';
        cancionesMostradasPrimerPaso.forEach(cancionElemento => {
            cancionesDiv.removeChild(cancionElemento);
        });

        // Mostrar nuevos artistas y sus respectivas canciones
        const nuevosArtistasExcluidos = [];
        mostrarArtistasAleatoriosExcluyendo(artistasDatos, 3, nuevosArtistasExcluidos);
    }, 5000); // Esperar 5 segundos después de mostrar los primeros artistas
}

window.onload = main;