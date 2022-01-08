//getting the dom elements
let messageEl = document.getElementById("message-El");
let sumEl = document.getElementById("sum-El");
let cardsEl = document.getElementById("card-El");

let firstCard;
let secondCard;
firstCard = Math.floor(Math.random() * 10) + 1;
secondCard = Math.floor(Math.random() * 10) + 1;
let sum = firstCard + secondCard;
cardsEl.textContent = "Cards : " + firstCard + " " + secondCard;
sumEl.textContent = "Sum : " + sum;
