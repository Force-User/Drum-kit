"use strict";
window.addEventListener("keydown", playSong);

function playSong(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
        changePressButton(key);
        if(!audio) return;
        audio.currentTime = 0;
        audio.play();
    
}

function changePressButton(button) {
    if(button) {
        button.classList.add("press-button");
        setTimeout( () => {
            button.classList.remove("press-button");
        },300)
    }
    
}


