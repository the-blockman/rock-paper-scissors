// return 'hello')

function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 1 / 3) {
    return "rock";
  } else if (computerChoice > 1 / 3 && computerChoice <= 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

const buttons = document.querySelectorAll("button");
const results = document.querySelector("div");
const score = document.createElement("p");
const runningScore = document.createElement("p");
const winner = document.createElement("p");

results.appendChild(score);
results.appendChild(runningScore);
results.appendChild(winner);

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const humanSelection = event.target.textContent;
    const computerSelection = getComputerChoice();
    score.textContent = playRound(humanSelection, computerSelection);
    runningScore.textContent = `your score is ${humanScore} the computer score is ${computerScore}`;
    winner.textContent = result();
  });
});

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      return "It's a Tie";
    } else if (computerChoice === "paper") {
      computerScore++;
      return "You Lose! Paper beats Rock.";
    } else {
      humanScore++;
      return "You Win! Rock beats Scissors.";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      return "You Win! Paper beats Rock";
    } else if (computerChoice === "paper") {
      return "It's a Tie";
    } else {
      computerScore++;
      return "You Lose! Scissors beats Paper.";
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      return "It's a Tie";
    } else if (computerChoice === "paper") {
      computerScore++;
      return "You Lose! Paper beats Rock.";
    } else {
      humanScore++;
      return "You Win, Rock beats Scissors";
    }
  } else {
    return "input a valid game";
  }
}

//get a final result after a score reaches 5
function result() {
  if (humanScore === 5 || computerScore === 5) {
    let finalResult = "";
    if (humanScore > computerScore) {
      finalResult = `You Win!`;
    } else if (computerScore > humanScore) {
      finalResult = `You Lose!`;
    } else {
      finalResult = `Tie Game!`;
    }
    humanScore = 0;
    computerScore = 0;
    return finalResult;
  }
}
