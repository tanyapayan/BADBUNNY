const playCancion = document.getElementsByClassName('play')
const stopCancion = document.getElementsByClassName('stop')


let audios = [];

// loading sounds
for(Elemento of playCancion){
    let cancion = Elemento. getAttribute('id')
    audios.push(new Audio(`./assets/${cancion}.mp3`));
}
console.log(audios);

// buttons for playing
for(let i = 0 ; i < playCancion.length ; i++){
    playCancion[i].addEventListener('click', function(){
        stopAllSounds();
        playSong(i);
    })
}
// buttons for pausing
for(let i = 0 ; i < stopCancion.length ; i++){
    stopCancion[i].addEventListener('click', function(){
        pauseSong(i);
    })
}

function playSong(index){
    audios[index].play();
}

function pauseSong(index){
    audios[index].pause();
}

function stopAllSounds(){
    for(let i = 0 ; i < audios.length ; i++){
        audios[i].pause();
    }
}