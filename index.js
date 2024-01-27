// all  button elements
const rockButton = document.querySelector("button.rock");
const paperbutton = document.querySelector("button.paper");
const scissorsButton = document.querySelector("button.scissors");

// computer images
const rock = document.querySelector("p.rock");
const paper = document.querySelector("p.paper");
const scissors = document.querySelector("p.scissors");

// score elements
const score = document.querySelector("div.score");
const computer_score = document.querySelector("div.compScore");

//
//  main constainer  stores button

// display slection
const displayPlayerSelection = document.querySelector("div.viewPlayer");
const displayComputerSelection = document.querySelector("div.viewComp");

// global score variables
let playerScore = 0;
let computerScore = 0;
let tie_counter=0

//  get random computer choice

// click events
rockButton.addEventListener("click", () => {
	playRound(rockButton, getComputerChoice());
	rock.style = "margin-left:14rem; ";
	checkScore();
});

paperbutton.addEventListener("click", () => {
	playRound(paperbutton, getComputerChoice());
	paper.style = "margin-left:10rem;";
	checkScore();
});

scissorsButton.addEventListener("click", () => {
	playRound(scissorsButton, getComputerChoice());
	scissors.style = "margin-left:10rem;";
	checkScore(); // check the score when click
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
		
		displayPlayerSelection.append(rock);

		displayComputerSelection.innerHTML = `<h1>Scissors</h1>`;
		scissors.style = "margin-left:14rem;";
		displayComputerSelection.append(scissors);
	} else if (playview === paperbutton && compview === rockButton) {
		displayPlayerSelection.innerHTML = `<h1> paper</> `;
		
		displayPlayerSelection.append(paper);

		displayComputerSelection.innerHTML = `<h1>Rock</h1>`;
		rock.style = "margin-left:14rem;";
		displayComputerSelection.append(rock);
	} else if (playview === scissorsButton && compview === paperbutton) {
		displayPlayerSelection.innerHTML = `<h1> Scissors</> `;
		
		displayPlayerSelection.append(scissors);

		displayComputerSelection.innerHTML = `<h1>Paper</h1>`;
		paper.style = "margin-left:10rem; ";
		displayComputerSelection.append(paper);
	}

	// computer wins
	if (compview === rockButton && playview === scissorsButton) {
		displayComputerSelection.innerHTML = `<h1>Rock</h1>`;
		rock.style = "margin-left:10rem;";
		displayComputerSelection.append(rock);

		displayPlayerSelection.innerHTML = `<h1> Scissors</> `;
		scissors.style = "margin-left:10rem;";
		displayPlayerSelection.append(scissors);
	} else if (compview === paperbutton && playview === rockButton) {
		displayComputerSelection.innerHTML = `<h1>Paper</h1>`;
		paper.style = "margin-left:10rem;";
		displayComputerSelection.append(paper);

		displayPlayerSelection.innerHTML = `<h1> Rock</> `;
		rock.style = "margin-left:10rem;";
		displayPlayerSelection.append(rock);
	} else if (compview === scissorsButton && playview === paperbutton) {
		displayComputerSelection.innerHTML = `<h1> i chose Scissors</h1>`;
		scissors.style = "margin-left:10rem;";
		displayComputerSelection.append(scissors);

		displayPlayerSelection.innerHTML = `<h1> you choose Paper</> `;
		paper.style = "margin-left:10rem;";
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
		playerScore = playerScore + 1;
		score.innerHTML=playerScore
		computer_score.innerHTML=computerScore
	} else if (
		playerSelection === paperbutton &&
		computerSelection === rockButton
	) {
		showImageAndText(playerSelection, computerSelection);
		playerScore = playerScore + 1;
		score.innerHTML=playerScore
		computer_score.innerHTML=computerScore
	} else if (
		playerSelection === scissorsButton &&
		computerSelection === paperbutton
	) {
		showImageAndText(playerSelection, computerSelection);
		playerScore = playerScore + 1;
		score.innerHTML=playerScore
		computer_score.innerHTML=computerScore
	}

	// computer wins
	if (computerSelection === rockButton && playerSelection === scissorsButton) {
		showImageAndText(playerSelection, computerSelection);
		computerScore = computerScore + 1;
		computer_score.innerHTML=computerScore
		score.innerHTML=playerScore
	} else if (
		computerSelection === paperbutton &&
		playerSelection === rockButton
	) {
		showImageAndText(playerSelection, computerSelection);
		computerScore = computerScore + 1;
		computer_score.innerHTML=computerScore
		score.innerHTML=playerScore
	} else if (
		computerSelection === scissorsButton &&
		playerSelection === paperbutton
	) {
		showImageAndText(playerSelection, computerSelection);
		computerScore = computerScore + 1;
		computer_score.innerHTML=computerScore
		score.innerHTML=playerScore
		
	}

	//  acount for ties
	if (playerSelection === computerSelection) {
		showImageAndText(playerSelection, computerSelection);
		score.innerHTML=playerScore
		computer_score.innerHTML=computerScore
		tie_counter+=1
		console.log(tie_counter)
	}
}

// checks score
const checkScore = () => {
	if (playerScore === 5) {
		displayPlayerSelection.innerHTML = "you win";
		displayComputerSelection.innerHTML = "computer lost";
		playerScore = 0;
		computerScore = 0;
		tie_counter=0
	} else if (computerScore === 5) {
		displayComputerSelection.innerHTML = "computer wins";
		displayPlayerSelection.innerHTML = "you lose";
		computerScore = 0;
		playerScore = 0;
		tie_counter=0
	}
};

//
