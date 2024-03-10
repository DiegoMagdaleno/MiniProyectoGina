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

function main() {
    const musicBtn = document.getElementById('sonidoBtn');
    musicBtn.addEventListener('click', toggleMusic);

}

const volverBtn = document.getElementById('volverBtn');
volverBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = irAPaginaHTMLRelativoAURLPrimaria('index');
});

let time = 0;
let timerInterval = setInterval(updateTimer, 1000)

main();