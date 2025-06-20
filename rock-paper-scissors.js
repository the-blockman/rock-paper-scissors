// console.log('hello')

function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 1/3 ) {
    return 'rock';
  } else if (computerChoice > 1/3 && computerChoice <= 2/3) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
//console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt('please make your move: rock, paper or scissors');
  if (typeof humanChoice === 'string') return humanChoice;
  return 'input a valid game';
}
//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === 'rock') {
    if (computerChoice === 'rock') {
      return "It's a Tie";
    } else if (computerChoice === 'paper') {
      computerScore++;
      return 'You Lose! Paper beats Rock.';
    } else {
      humanScore++;
      return 'You Win! Rock beats Scissors.';
    }
  } else if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      humanScore++;
      return "You Win! Paper beats Rock";
    } else if (computerChoice === 'paper') {
      return "It's a Tie";
    } else {
      computerScore++;
      return 'You Lose! Scissors beats Paper.';
    }
  } else if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "It's a Tie";
    } else if (computerChoice === 'paper') {
      computerScore++;
      return 'You Lose! Paper beats Rock.';
    } else {
      humanScore++;
      return 'You Win, Rock beats Scissors';
    }
  } else {
    return 'input a valid game';
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));