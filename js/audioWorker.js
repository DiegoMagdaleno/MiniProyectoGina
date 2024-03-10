importScripts('libs/howler.min.js');

let sound;

self.onmessage = function (e) {
    if (e.data === "playAudio") {
        if (!sound) {
            sound = new Howl({
                src: ['../assets/audio/Chaos.mp3'],
            });
        } 
        sound.play();
    }
}