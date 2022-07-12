let firstCard = getRandom();
let secondCard = getRandom();
let cards = [];
let sum = 0
let message = "";
let hasBlackJack = false;
let hasStarted = false
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

function gameDisplay(){
	document.getElementById("cards-el").innerHTML = "cards: "
	for (i = 0; i < cards.length; i++) {
		document.getElementById("cards-el").textContent += cards[i] + " "}
		document.querySelector("#message-el").innerHTML = message
    document.getElementById("sum-el").innerHTML = "sum "
    document.getElementById("sum-el").innerHTML += sum
}
function renderGame() {
	if (sum <= 21) {
	message = "do you want to draw a new card?"
	hasStarted = true
	hasBlackJack = false
	isAlive = true
    } else if (sum === 21) {
	message = "woohoo! you've got blackjack"
	hasBlackJack = true
	hasStarted = true
	isAlive = true
	} else	{
    	message = "you are out of the game"
	isAlive = false;
	hasStarted = true
	hasBlackJack = false
	}
    
  
}; 

function newCard() {
	if (isAlive === true && hasBlackJack === false && hasStarted === true) {
	let thirdCard = getRandom();
	sum += thirdCard;
	cards.push(thirdCard);
	renderGame()
	gameDisplay()}
};
	

function startGame() {
    if (hasStarted === false && hasBlackJack === false  && isAlive === true) {
    	renderGame()
	    cards.push(getRandom())
	    cards.push(getRandom())
	    sum = cards[0] + cards[1]
	    gameDisplay()
	}
}
	    
function gameOver () {
	console.log("game over")
}
gameOver()