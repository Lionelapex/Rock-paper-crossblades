// all  button elements
const rockButton = document.querySelector("button.rock");
const paperbutton = document.querySelector("button.paper");
const scissorsButton = document.querySelector("button.scissors");

// computer images
const rock = document.querySelector("p.rock");
const paper = document.querySelector("p.paper");
const scissors = document.querySelector("p.scissors");

// score elements 
const score =document.querySelector('div.score')

// 
//  main constainer  stores button


// display slection
const displayPlayerSelection = document.querySelector("div.viewPlayer");
const displayComputerSelection = document.querySelector("div.viewComp");

// global score variables
let playerScore=0
let computerScore=0



//  get random computer choice

// click events
rockButton.addEventListener("click", () => {
	
	playRound(rockButton, getComputerChoice());
	checkScore()
});

paperbutton.addEventListener("click", () => {
	playRound(paperbutton, getComputerChoice());
	checkScore()
});

scissorsButton.addEventListener("click", () => {
	playRound(scissorsButton, getComputerChoice()); 
	checkScore()  // check the score when click
});


// functions
function getComputerChoice(
	computerchoice = [rockButton, paperbutton, scissorsButton]
) {
	return computerchoice[Math.floor(Math.random() * computerchoice.length)];
}


const showImageAndText = (playview, compview) => {
	// player selection
	if (playview === rockButton && compview === scissorsButton) {
		displayPlayerSelection.innerHTML = `<h1> Rock</> `;
		rock.style = "display:block";
		displayPlayerSelection.append(rock);

		displayComputerSelection.innerHTML = `<h1>Scissors</h1>`;
		scissors.style = "display:block";
		displayComputerSelection.append(scissors);
	} else if (playview === paperbutton && compview === rockButton) {
		displayPlayerSelection.innerHTML = `<h1> paper</> `;
		paper.style = "display:block";
		displayPlayerSelection.append(paper);

		displayComputerSelection.innerHTML = `<h1>Rock</h1>`;
		rock.style = "display:block";
		displayComputerSelection.append(rock);
	} else if (playview === scissorsButton && compview === paperbutton) {
		displayPlayerSelection.innerHTML = `<h1> Scissors</> `;
		scissors.style = "display:block";
		displayPlayerSelection.append(scissors);

		displayComputerSelection.innerHTML = `<h1>Paper</h1>`;
		paper.style = "display:block";
		displayComputerSelection.append(paper);
	}

	// computer wins
	if (compview === rockButton && playview === scissorsButton) {
		displayComputerSelection.innerHTML = `<h1>Rock</h1>`;
		rock.style = "display:block";
		displayComputerSelection.append(rock);

		displayPlayerSelection.innerHTML = `<h1> Scissors</> `;
		scissors.style = "display:block";
		displayPlayerSelection.append(scissors);
	} else if (compview === paperbutton && playview === rockButton) {
		displayComputerSelection.innerHTML = `<h1>Paper</h1>`;
		paper.style = "display:block";
		displayComputerSelection.append(paper);

		displayPlayerSelection.innerHTML = `<h1> Rock</> `;
		rock.style = "display:block";
		displayPlayerSelection.append(rock);
	} else if (compview === scissorsButton && playview === paperbutton) {
		displayComputerSelection.innerHTML = `<h1>Scissors</h1>`;
		scissors.style = "display:block";
		displayComputerSelection.append(scissors);

		displayPlayerSelection.innerHTML = `<h1> Paper</> `;
		paper.style = "display:block";
		displayPlayerSelection.append(paper);
	}
	// ties
	if (playview === compview) {
		displayPlayerSelection.innerHTML = `<h1> its a tie</h1>`;
		displayComputerSelection.innerHTML = `<h1> its a tie</h1>`;
	}
};
// the game
// playround checks if of
function playRound(playerSelection, computerSelection) {
	// player wins
	if (playerSelection === rockButton && computerSelection === scissorsButton) {
		showImageAndText(playerSelection, computerSelection);
		playerScore=playerScore+1
		score.innerHTML=` USER :${playerScore} :  COMPUTER : ${computerScore}`

	} else if (
		playerSelection === paperbutton &&
		computerSelection === rockButton
	) {
		showImageAndText(playerSelection, computerSelection);
		playerScore=playerScore+1
		score.innerHTML=` USER :${playerScore} :  COMPUTER : ${computerScore}`
	} else if (
		playerSelection === scissorsButton &&
		computerSelection === paperbutton
	) {
		showImageAndText(playerSelection, computerSelection);
		playerScore=playerScore+1
		score.innerHTML=` USER :${playerScore} :  COMPUTER : ${computerScore}`
	}

// computer wins
	if (computerSelection === rockButton && playerSelection === scissorsButton) {
		showImageAndText(playerSelection, computerSelection);
		computerScore=computerScore+1
		score.innerHTML=` USER :${playerScore} :  COMPUTER : ${computerScore}`

	} else if (
		computerSelection === paperbutton &&
		playerSelection === rockButton
	) {
		showImageAndText(playerSelection, computerSelection);
		computerScore=computerScore+1
		score.innerHTML=` USER :${playerScore} :  COMPUTER : ${computerScore}`
	} else if (
		computerSelection === scissorsButton &&
		playerSelection === paperbutton
	) {
		showImageAndText(playerSelection, computerSelection);
		computerScore=computerScore+1
		score.innerHTML=` USER :${playerScore} :  COMPUTER : ${computerScore}`
	}

	//  acount for ties
	if (playerSelection === computerSelection) {
		showImageAndText(playerSelection, computerSelection);
		score.innerHTML=` USER :${playerScore} :  COMPUTER : ${computerScore}`
	}
}


// checks score 
const checkScore=()=>{
	if(playerScore===5){
		displayPlayerSelection.innerHTML="you win"
		displayComputerSelection.innerHTML="computer lost"
		playerScore=0
		computerScore=0
		
	}
	else if(computerScore===5){
		
		displayComputerSelection.innerHTML="computer wins"
		displayPlayerSelection.innerHTML="you lose"
		computerScore=0
		playerScore=0
		
	}
}



// 
