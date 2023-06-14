/*------Flipping logic-----*/

let errorDisplayed = false; // To keep track of whether the error message has been displayed

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
