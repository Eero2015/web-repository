let firstCard = 11;
let secondCard = 0;
let cards = [firstCard,secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""

function renderGame() {
	if (sum <= 20) {
	message = "do you want to draw a new card?"
    } else if (sum === 21) {
	message = "woohoo! you've got blackjack!"
	hasBlackJack = true;
    } else	{
    	message = "you are out of the game"
	isAlive = false;
    };
    document.querySelector("#message-el").innerHTML = message
    document.getElementById("sum-el").innerHTML = "sum " + sum
    document.getElementById("cards-el").innerHTML = "cards " + cards[0] + " " + cards[1]

}; 

function newCard() {
	let thirdCard = 10;
	sum += thirdCard;
	renderGame();
};

function startGame() {
	renderGame()
};

