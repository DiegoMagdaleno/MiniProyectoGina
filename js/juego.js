function main() {
    const artistasDatos = [
        {
            nombre: "Taylor Swift",
            imagen: "assets/img/taylor_swift.png",
        },
        {
            nombre: "Ed Sheeran",
            imagen: "assets/img/ed_sheeran.png",
        },
        {
            nombre: "Olivia Rodrigo",
            imagen: "assets/img/olivia_rodrigo.png",
        },
        {
            nombre: "Imagine Dragons",
            imagen: "assets/img/imagine_dragons.png",
        },
        {
            nombre: "Justin Bieber",
            imagen: "assets/img/justin_bieber.png",
        },
        {
            nombre: "Shawn Mendes",
            imagen: "assets/img/shawn_mendes.png",
        },
        {
            nombre: "Billie Eilish",
            imagen: "assets/img/billie_eilish.png",
        },
        {
            nombre: "Katy Perry",
            imagen: "assets/img/katy_perry.png",
        },
        {
            nombre: "Dua Lipa",
            imagen: "assets/img/dua_lipa.png",
        },
        {
            nombre: "The Chainsmokers",
            imagen: "assets/img/the_chainsmokers.png",
        },
    ];

    const cancionesDatos = [
        {
            nombre: "Blank Space",
            artista: "Taylor Swift",
            imagen: "assets/img/blank_space.jpg",
            audio: "blank_space.mp3",
        },
        {
            nombre: "Shape of You",
            artista: "Ed Sheeran",
            imagen: "assets/img/shape_of_you.png",
            audio: "shape_of_you.mp3",
        },
        {
            nombre: "drivers license",
            artista: "Olivia Rodrigo",
            imagen: "assets/img/drivers_license.jpg",
            audio: "drivers_license.mp3",
        },
        {
            nombre: "Believer",
            artista: "Imagine Dragons",
            imagen: "assets/img/believer.jpg",
            audio: "believer.mp3",
        },
        {
            nombre: "Baby",
            artista: "Justin Bieber",
            imagen: "assets/img/baby.jpg",
            audio: "baby.mp3",
        },
        {
            nombre: "There's Nothing Holdin' Me Back",
            artista: "Shawn Mendes",
            imagen: "assets/img/theres_nothing_holdin_me_back.jpg",
            audio: "theres_nothing_holdin_me_back.mp3",
        },
        {
            nombre: "Bad Guy",
            artista: "Billie Eilish",
            imagen: "assets/img/bad_guy.jpg",
            audio: "bad_guy.mp3",
        },
        {
            nombre: "Roar",
            artista: "Katy Perry",
            imagen: "assets/img/roar.jpg",
            audio: "roar.mp3",
        },
        {
            nombre: "New Rules",
            artista: "Dua Lipa",
            imagen: "assets/img/new_rules.jpg",
            audio: "new_rules.mp3",
        },
        {
            nombre: "Closer",
            artista: "The Chainsmokers",
            imagen: "assets/img/closer.jpg",
            audio: "closer.mp3",
        },
    ];

    const artistasDiv = document.getElementById("artistas");
    const cancionesDiv = document.getElementById("canciones");
    const scoreDisplay = document.getElementById("score-display");

    let artistasColocados = [];

    function crearIdNombre(nombre) {
        return nombre.toLowerCase().replace(/ /g, "_");
    }

    function getRandomIndex(max, excluido = -1) {
        let index = Math.floor(Math.random() * max);
        while (index === excluido) {
            index = Math.floor(Math.random() * max);
        }
        return index;
    }

    function mostrarArtistasAleatoriosExcluyendo(
        artistas,
        cantidad,
        artistasExcluidos
    ) {
        const artistasMostrados = [];
        const cancionesMostradas = []; // Para hacer un seguimiento de las canciones mostradas
        while (artistasMostrados.length < cantidad) {
            let indice = getRandomIndex(artistas.length);
            // Verificar que el índice no esté en los artistas excluidos ni en los artistas mostrados previamente
            const artista = artistas[indice];
            if (
                !artistasExcluidos.includes(artista.nombre) &&
                !artistasMostrados.some((a) => a.nombre === artista.nombre)
            ) {
                artistasMostrados.push(artista);
                const elemento = document.createElement("div");
                elemento.setAttribute("data-artist-name", artista.nombre);
                elemento.id = `artista-${crearIdNombre(artista.nombre)}`;
                elemento.innerHTML = `
                        <img src="${artista.imagen}" alt="${artista.nombre}">
                        <p>${artista.nombre}</p>`;
                artistasDiv.appendChild(elemento);

                // Mostrar canciones correspondientes al artista
                const cancionesArtista = cancionesDatos.filter(
                    (cancion) => cancion.artista === artista.nombre
                );
                cancionesArtista.forEach((cancion) => {
                    const cancionElemento = document.createElement("div");
                    cancionElemento.setAttribute("data-song-artist", cancion.artista);
                    cancionElemento.id = `cancion-${crearIdNombre(cancion.nombre)}`;
                    cancionElemento.innerHTML = `
                            <img src="${cancion.imagen}" alt="${cancion.nombre}" draggable="false">
                            <p>${cancion.nombre}</p>
                        `;
                    cancionesDiv.appendChild(cancionElemento);
                    cancionesMostradas.push(cancionElemento); // Guardar la referencia del elemento de la canción mostrada
                });
            }
        }
        // Devolver la referencia de las canciones mostradas y los artistas mostrados
        return { artistasMostrados, cancionesMostradas };
    }

    function dragStart(event) {
        const target = event.target.closest("div");

        event.dataTransfer.setData("text/plain", target.id);
    }

    // Función para agregar eventos de arrastre y soltado a los elementos de canción
    function agregarEventosArrastre() {
        const canciones = document.querySelectorAll("#canciones div");
        canciones.forEach((cancion) => {
            cancion.setAttribute("draggable", true);
            cancion.addEventListener("dragstart", dragStart);
        });

        const artistas = document.querySelectorAll("#artistas div");
        artistas.forEach((artista) => {
            artista.addEventListener("dragover", dragOver);
            artista.addEventListener("drop", drop);
        });
    }

    function dragOver(event) {
        event.preventDefault();
    }

    let music = new Howl({
        src: ['../assets/audio/Chaos.mp3'],
        loop: true,
    });

    let musicPlaying = false;
    let musicPosition = 0;

    function playMusic() {
        if (!musicPlaying) {
            music.seek(musicPosition);
            music.play();
            musicPlaying = true;
        }
    }

    function pauseMusic() {
        if (musicPlaying) {
            musicPosition = music.seek();
            music.pause();
            musicPlaying = false;
        }
    }

    function toggleMusic() {
        if (musicPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    }

    function formatTime(time) {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');

        return hours + ':' + minutes + ':' + seconds;
    }

    function updateTimer() {
        time++;
        document.getElementById('tiempo').innerText = formatTime(time);
    }

    const musicBtn = document.getElementById('sonidoBtn');
    musicBtn.addEventListener('click', toggleMusic);

    const volverBtn = document.getElementById('volverBtn');
    volverBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = irAPaginaHTMLRelativoAURLPrimaria('index');
    });

    let time = 0;
    let timerInterval = setInterval(updateTimer, 1000)

    let score = 0;

    function drop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("text/plain");
        const draggedElement = document.getElementById(data);

        const targetArtistName = this.getAttribute("data-artist-name");
        const songArtistName = draggedElement.getAttribute("data-song-artist");

        if (targetArtistName !== songArtistName) {
            alert("¡Esa no es la canción correcta para este artista!");
            return;
        }

        draggedElement.parentNode.removeChild(draggedElement);
        event.target.appendChild(draggedElement);

        score++;
        artistasColocados

        if (score === 3) {
            // Excluir los artistas ya mostrados
            const artistasExcluidos = Array.from(
                artistasDiv.querySelectorAll("div")
            ).map((div) => div.getAttribute("data-artist-name"));

            artistasDiv.innerHTML = "";

            // Mostrar los siguientes 3 artistas
            const {
                artistasMostrados: nuevosArtistasMostrados,
                cancionesMostradas: nuevasCancionesMostradas,
            } = mostrarArtistasAleatoriosExcluyendo(artistasDatos, 3, artistasExcluidos);

            agregarEventosArrastre(); ce
        }

        if (score === 6) {
            let state = getState();
            state.puntaje = score;
            state.tiempo = time;
            setState(state);
            window.location.href = irAPaginaHTMLRelativoAURLPrimaria('felicitaciones');
        }
    }

    const {
        artistasMostrados: artistasMostradosPrimerPaso,
        cancionesMostradas: cancionesMostradasPrimerPaso,
    } = mostrarArtistasAleatoriosExcluyendo(artistasDatos, 3, []);

    agregarEventosArrastre();
}

window.onload = main;