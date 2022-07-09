let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard + 5;
let hasBlackJack = false;
let isAlive = true;

if (sum < 21) {
	console.log("do you want to draw a new card?")
} else if (sum === 21) {
	console.log("woohoo! you've got blackjack!")
	hasBlackJack = true;
} else if (sum > 21) {
	console.log("you are out of the game")
	isAlive = false;
};
console.log(isAlive);