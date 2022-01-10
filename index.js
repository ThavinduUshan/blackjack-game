//check whether user clicked the start button or not
let isAlive = false;

//getting the dom elements
let messageEl = document.getElementById("message-El");
let sumEl = document.getElementById("sum-El");
let cardsEl = document.getElementById("card-El");

//cards array & sum
let cards = [];
sum = 0;

//random card function
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

//start game function
function startGame() {
  isAlive = true;
  let firstCard;
  let secondCard;
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  cards.push(firstCard);
  cards.push(secondCard);
  console.log(cards);
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards : " + cards;
  sumEl.textContent = "Sum : " + sum;
}

function newCard() {
  if (isAlive) {
  }
}
