//check whether user clicked the start button or not
let isAlive = false;

//getting the dom elements
let messageEl = document.getElementById("message-El");
let sumEl = document.getElementById("sum-El");
let cardsEl = document.getElementById("card-El");

//cards array & sum
let cards = [];
sum = 0;

//start game function
function startGame() {
  isAlive = true;
  let firstCard;
  let secondCard;
  firstCard = Math.floor(Math.random() * 10) + 1;
  secondCard = Math.floor(Math.random() * 10) + 1;
  sum = firstCard + secondCard;
  cardsEl.textContent = "Cards : " + firstCard + " " + secondCard;
  sumEl.textContent = "Sum : " + sum;
}

function newCard() {
  if (isAlive) {
  }
}
