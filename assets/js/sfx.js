let bulb = new Audio()
bulb.src = "./assets/sfx/bulbasaur.mp3"

let char = new Audio()
char.src = "./assets/sfx/charmander.mp3"

let squir = new Audio()
squir.src = "./assets/sfx/squirtle.mp3"

let haunt = new Audio()
haunt.src = "./assets/sfx/haunter.mp3"

let mew = new Audio()
mew.src = "./assets/sfx/mewtwo.mp3"

let pika = new Audio()
pika.src = "./assets/sfx/pikachu.mp3"

let bgmusic = new Audio()
bgmusic.src = "./assets/sfx/gamecorner.mp3"

let butter = new Audio()
butter.src = "./assets/sfx/butterfree.mp3"

let nido = new Audio()
nido.src = "./assets/sfx/nidoking.mp3"

function toggleAudio() {
  if (bgmusic.paused) {
    bgmusic.play();
  } else {
    bgmusic.pause();
  }
}

function toggleSfx() {
  bulb.muted = !bulb.muted;
  char.muted = !char.muted;
  squir.muted = !squir.muted;
  haunt.muted = !haunt.muted;
  mew.muted = !mew.muted;
  pika.muted = !pika.muted;
  nido.muted = !nido.muted;
  butter.muted = !butter.muted;
}
