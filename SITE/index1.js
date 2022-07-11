let firstCard = getRandom();
let secondCard = getRandom();
let cards = [];
let sum = 0
let hasBlackJack = false;
let isAlive = true;
let player = {
	   name : "per",
	   chips : 200
}
let playerEl = document.getElementById("player-el")
playerEl.innerHTML = player.name + ": $" + player.chips 
function getRandom() {
	let card = Math.floor(Math.random() * 13) + 1
	if (card == 1) {
		return 11
	} else if (card > 10) {
		return 10
	} else {  
	return card }
};


function renderGame() {
    document.getElementById("cards-el").innerHTML = "cards: "
	for (i = 0; i < cards.length; i++) {
		document.getElementById("cards-el").textContent += cards[i] + " "}
	if (sum <= 20) {
	message = "do you want to draw a new card?"
    } else if (sum === 21) {
	message = "woohoo! you've got blackjack!"
	hasBlackJack = true;
	} else	{
    	message = "you are out of the game"
	isAlive = false;
	}
    document.querySelector("#message-el").innerHTML = message
    document.getElementById("sum-el").innerHTML = "sum " + sum
  
}; 

function newCard() {
	if (isAlive === true && hasBlackJack === false) {
	let thirdCard = getRandom();
	sum += thirdCard;
	cards.push(thirdCard);
	renderGame();
	console.log(cards)}
};
	

function startGame() {
	cards.push(getRandom());
	cards.push(getRandom());
	sum = cards[0] + cards[1];
	renderGame()}