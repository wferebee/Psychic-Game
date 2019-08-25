

	var wins = document.getElementById("wins");
	var losses = document.getElementById("losses");
	var guessesRemaining = document.getElementById("guessesRemaining");
    var guessesSoFar = document.getElementById("guessesSoFar");
    

    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    
    var winsCount = 0;
    var lossesCount = 0;
    

	var originalAmount = 9; //original amount of guesses //
    var guessesRemainingCount = originalAmount;
    

    var guessesArray = []; // array for user guesses //
    

	var randomLetter = function () {

        randomLetter = alpha[Math.floor(Math.random()*alpha.length)]
        
		return randomLetter
    }	
    

	var stats = function () {

		wins.innerHTML = "Wins: " + winsCount
		losses.innerHTML = "Losses: " + lossesCount
		guessesRemaining.innerHTML = "Remaing Guesses: " + guessesRemainingCount
		guessesSoFar.innerHTML = "Guesses So Far: " + guessesArray
	}
    
    
	var userWon = function (userLetter) {

        return userLetter === currentLetter 
    }
    

	var userLost = function () {

		return guessesRemainingCount === 0;
    }
    

    var currentLetter = randomLetter();
    

    stats();
    

	document.onkeyup = function (event) {

        var userLetter = event.key;
        
        guessesRemainingCount--
        
        guessesArray.push(userLetter)
        
		if (userWon(userLetter)) {
			winsCount++;
			resetGame();
        } 
        
		if (userLost()) {
			lossesCount++;
			resetGame();
		}
		stats();
    }
    
    var resetGame = function () {
        
		guessesArray = [];
		guessesRemainingCount = originalAmount;    // 81 & 82 dont work in opposite order!! //
		currentLetter = randomLetter();
	}
