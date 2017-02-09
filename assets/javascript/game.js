//defined the object 'game'
var game = {
	randomNumber: 0,
	userScore: 0,
	crystal1Value: 0,
	crystal2Value: 0,
	crystal3Value: 0,
	crystal4Value: 0,
	wins: 0,
	losses: 0,

	//select random number between min and max, which will be defined later
	getRandomNumber: function(min, max) {
  		return Math.floor(Math.random() * (max - min)) + min;
	},
	//reset game function
	resetGame: function() {
		this.userScore = 0;
		this.randomNumber = this.getRandomNumber(19, 120);
		this.crystal1Value = this.getRandomNumber(1, 12);
		this.crystal2Value = this.getRandomNumber(1, 12);
		this.crystal3Value = this.getRandomNumber(1, 12);
		this.crystal4Value = this.getRandomNumber(1, 12);
		$('.randomBox').html("<h5>Random<br><u>Number</u></h5>" + this.randomNumber);
	},
	//update score function
	updateUserScore: function(value) {
		if (this.userScore < this.randomNumber) {
			this.userScore += value;
		};
		if (this.userScore === this.randomNumber) {
			this.wins++;
			$('.wins').text("Wins: " + this.wins);
			console.log("YOU WON");
			this.resetGame();
		}
		else if (this.userScore > this.randomNumber) {
			this.losses++;
			$('.losses').text("Losses: " + this.losses);
			console.log("YOU LOST LOSER");
			this.resetGame();
		};
	},

};

$(document).ready(function() {
	game.resetGame();
	//event handlers
	//on click crystal1, updateUserScore with value of crystal1
	$('.crystal1').on("click", function () {
		game.updateUserScore(game.crystal1Value);
		$('.userScore').text(game.userScore);

	});

	//on click crystal2, updateUserScore with value of crystal2
	$('.crystal2').on("click", function () {
		game.updateUserScore(game.crystal2Value);
		$('.userScore').text(game.userScore);

	});
	//on click crystal3, updateUserScore with value of crystal3
	$('.crystal3').on("click", function () {
		game.updateUserScore(game.crystal3Value);
		$('.userScore').text(game.userScore);

	});
	//on click crystal4, updateUserScore with value of crystal4
	$('.crystal4').on("click", function () {
		game.updateUserScore(game.crystal4Value);
		$('.userScore').text(game.userScore);

	});

});


