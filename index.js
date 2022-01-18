//check whether user clicked the start button or not
let isAlive = false;

//getting the dom elements
let messageEl = document.getElementById("message-El");
let sumEl = document.getElementById("sum-El");
let cardsEl = document.getElementById("card-El");
let startEl = document.getElementById("start");
let errorEl = document.getElementById("error");
errorEl.style.display = "none";

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
  if (!isAlive) {
    errorEl.style.display = "none ";
    isAlive = true;
    let firstCard;
    let secondCard;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    console.log(cards);
    startEl.textContent = "END GAME";
    startEl.style.backgroundColor = "red";
    sum = firstCard + secondCard;
    renderGame();
  } else {
    isAlive = false;
    cards = [];
    sum = 0;
    sumEl.textContent = "Sum :" + " ";
    cardsEl.textContent = "Cards :" + " ";
    startEl.textContent = "START GAME";
    startEl.style.backgroundColor = "goldenrod";
  }
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
    isAlive = false;
    cards = [];
    sum = "";
    startEl.textContent = "RESTART GAME";
    startEl.style.backgroundColor = "goldenrod";
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
  } else {
    errorEl.style.display = "block";
  }
}
