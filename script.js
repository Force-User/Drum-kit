"use strict";
window.addEventListener("keydown",(e) => {
    playSong(e);
});

const sounds = {}
const keys = {}

getAllElements();


function getAllElements() {
    document.querySelectorAll('audio').forEach(sound => sounds[sound.dataset.key] = sound);
    document.querySelectorAll('button').forEach(key => keys[key.dataset.key] = key);
}

function playSong(e) {
    if(!sounds[e.code]) return;
    sounds[e.code].currentTime = 0;
    sounds[e.code].play();
    changePressButton(keys[e.code]);

}

function changePressButton(button) {
    if(button) {
        button.classList.add("press-button");
        setTimeout( () => {
            button.classList.remove("press-button");
        },300)
    }
}