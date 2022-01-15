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
  if (sum < 21) {
    messageEl.textContent = "Do you want to get a new card?";
  }
  if (sum === 21) {
    messageEl.textContent = "You've got Black Jack";
  }
  if (sum > 21) {
    messageEl.textContent = "You Lost. Let's Retry!";
  }
  cardsEl.textContent = "Cards : " + cards;
  sumEl.textContent = "Sum : " + sum;
}

function newCard() {
  if (isAlive) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
