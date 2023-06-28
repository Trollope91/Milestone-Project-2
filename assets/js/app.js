/*------Flipping logic-----*/

let isHardMode = false;


const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedCards = 0

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;

    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

/*------Matching Logic------*/

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
  matchedCards += 2;

  if (isHardMode) {
    if (matchedCards === cards.length) {
      restartGame();
    }
  } else {
    if (matchedCards === cards.length - 4) {
      restartGame();
    }
  }

  if (matchedCards === cards.length) {
    restartGame();
  }
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

/*
Provide function for card matching dependant on game mode */

/*------Reset cards------*/

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

/*------Shuffle Logic------*/

function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}

/*
Shuffle game cards upon board reset */

/*------Reset game-----*/

function restartGame() {
  resetBoard();
  shuffle();
  cards.forEach(card => {
    card.classList.remove('flip');
    card.addEventListener('click', flipCard);
  });
  matchedCards = 0;
}

shuffle();
cards.forEach(card => card.addEventListener('click', flipCard));

/*
Reset game tiles upon completion of the game */

/*------Monkey Test-----*/

async function monkeyTestGame() {
  let homeContainer = document.querySelector(".home.container");
  let divs = homeContainer.querySelectorAll(".memory-card");

  let numEvents = 1000;

  for (let i = 0; i < numEvents; i++) {
    setTimeout(function () {
      let randomIndex = Math.floor(Math.random() * divs.length);
      let divElement = divs[randomIndex];
      divElement.click();
    }, 3000 * i);

  }
}

/* Create spurious inputs in the memory-game element */

