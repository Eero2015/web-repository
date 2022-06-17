let firstCard = 11
let secondCard = 8
let sum = firstCard + secondCard

if (sum < 21) {
	console.log("do you want to draw a new card?")
} else if (sum === 21) {
	console.log("woohoo! you've got blackjack!")
} else if (sum > 21) {
	console.log("you are out of the game")
}