// Button elements
const rockButton = document.querySelector("button.rock");
const paperButton = document.querySelector("button.paper");
const scissorsButton = document.querySelector("button.scissors");

// Computer images
const rock = document.querySelector("p.rock");
const paper = document.querySelector("p.paper");
const scissors = document.querySelector("p.scissors");

// Score elements
const playerScoreElement = document.querySelector("div.score");
const computerScoreElement = document.querySelector("div.compScore");

// Display selections
const displayPlayerSelection = document.querySelector("div.viewPlayer");
const displayComputerSelection = document.querySelector("div.viewComp");

// Global variables for scores
let playerScore = 0;
let computerScore = 0;
let tieCounter = 0;

// Get a random computer choice
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
};

// Display the results of the round
const showSelections = (playerChoice, computerChoice) => {
    const emojiMap = {
        rock: "✊",
        paper: "✋",
        scissors: "✌️",
    };

    displayPlayerSelection.innerHTML = `
    <h2>Player: ${playerChoice} ${emojiMap[playerChoice]}</h2>
  `;
    displayComputerSelection.innerHTML = `
    <h2>Computer: ${computerChoice} ${emojiMap[computerChoice]}</h2>
  `;
};

// Play a single round of the game
const playRound = (playerChoice) => {
    const computerChoice = getComputerChoice();

    // Display selections
    showSelections(playerChoice, computerChoice);

    // Determine the winner
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (playerChoice === computerChoice) {
        tieCounter++;
        console.log(`Ties: ${tieCounter}`);
    } else {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }

    // Check if someone has won
    checkWinner();
};

// Check if a player has reached the winning score
const checkWinner = () => {
    if (playerScore === 5) {
        displayPlayerSelection.innerHTML = "<h2>You win! 🎉</h2>";
        displayComputerSelection.innerHTML = "<h2>Computer lost. 😢</h2>";
        resetGame();
    } else if (computerScore === 5) {
        displayPlayerSelection.innerHTML = "<h2>You lose. 😞</h2>";
        displayComputerSelection.innerHTML = "<h2>Computer wins! 🏆</h2>";
        resetGame();
    }
};

// Reset the game
const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    tieCounter = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
};

// Add event listeners for buttons
rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));