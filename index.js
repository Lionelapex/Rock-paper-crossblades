// const items =["one","two","three"]
//  const random= items[Math.floor(Math.random()*items.length)]
//  console.log(random)

// computer randomly chooses rock paper scissors

function getComputerChoice(computerchoice = ["Rock", "Paper", "Scissors"]) {
	return computerchoice[Math.floor(Math.random() * computerchoice.length)].toLowerCase();
}

// tracks score
var PlayerScore = 0;
var computerScore = 0;
// play round function

function playRound(
	playerSelection = window.prompt("rock ,paper,scissors").toLowerCase(),
	computerSelection = getComputerChoice()
) {
	// incase of draw

	// if the  player wins
	if (playerSelection === "rock" && computerSelection === "scissors") {
		alert(
			`ohh seems like ${playerSelection} beat ${computerSelection} you win`
		);
		//  updating the player score
		PlayerScore = PlayerScore + 1;
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		alert(
			`ohh seems like ${playerSelection} beat ${computerSelection} you win`
		);
		//  updating the player score
		PlayerScore = PlayerScore + 1;
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		alert(
			`ohh seems like ${playerSelection} beat ${computerSelection} you win`
		);
		//  updating the player score
		PlayerScore = PlayerScore + 1;
	}

	// if  the  computer wins
	else if (computerSelection === "rock" && playerSelection === "scissors") {
		alert(
			`oooouu seems like ${computerSelection} beat ${playerSelection} computer win`
		);
		//     updating the computer score
		computerScore = computerScore + 1;
	} else if (computerSelection === "paper" && playerSelection === "rock") {
		alert(
			`ooou seems like ${computerSelection} beats ${playerSelection} computer wins  `
		);
		//     updating the computer score
		computerScore = computerScore + 1;
	} else if (computerSelection === "scissors" && playerSelection === "paper") {
		alert(
			`ooou seems like ${computerSelection} beats ${playerSelection} computer wins  `
		);
		//     updating the computer score
		computerScore = computerScore + 1;
	}
	// incase for draws or ties
	else if (playerSelection === computerSelection) {
		alert("its a tie play again a point to each");
		//     update both the players score and computers score
		PlayerScore = PlayerScore + 1;
		computerScore = computerScore + 1;
	}
}

//  plays the game 5 times
function game() {
	// player score and computer score are displayed at the begining of the round
	alert(`player score :${PlayerScore}  computer score${computerScore}`);
	for (i = 1; i <= 5; i++) {
		playRound();
	}
	// displays the score at the end of the game
	alert(`player score :${PlayerScore}  computer score${computerScore}`);
	//  if the player score and computers score are the same we are going to go to a sudden death round
	//  this plays a single round of
	if (PlayerScore === computerScore) {
		alert(
			`hmmmm a tie , prepare for the sudden death round mwaaahhhhaahahaha`
		);
		for (i = 1; i < 2; i++) {
			playRound();
		}
	}
	// display the scores
	alert(`player score :${PlayerScore}  computer score${computerScore}`);
	if (PlayerScore > computerScore) {
		alert(` player1 wins `);
	} else alert(` computer wins `);
}
game();
