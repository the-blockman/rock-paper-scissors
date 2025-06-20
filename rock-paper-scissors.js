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


function playGame () {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === 'rock') {
      if (computerChoice === 'rock') {
        console.log("It's a Tie") ;
      } else if (computerChoice === 'paper') {
        computerScore++;
        console.log('You Lose! Paper beats Rock.');
      } else {
        humanScore++;
        console.log('You Win! Rock beats Scissors.');
      }
    } else if (humanChoice === 'paper') {
      if (computerChoice === 'rock') {
        humanScore++;
        console.log("You Win! Paper beats Rock");
      } else if (computerChoice === 'paper') {
        console.log("It's a Tie");
      } else {
        computerScore++;
        console.log('You Lose! Scissors beats Paper.');
      }
    } else if (humanChoice === 'scissors') {
      if (computerChoice === 'rock') {
        console.log("It's a Tie");
      } else if (computerChoice === 'paper') {
        computerScore++;
        console.log('You Lose! Paper beats Rock.');
      } else {
        humanScore++;
        console.log('You Win, Rock beats Scissors');
      }
    } else {
      console.log('input a valid game');
    }
  }
  //console.log(playRound(humanSelection, computerSelection));

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log(`your score is ${humanScore} the computer score is ${computerScore}`)
  if (humanScore > computerScore) {
    console.log('You win!');
  } else if (humanScore === computerScore) {
    console.log('Tie Game');
  } else {
    console.log('You Lose')
  }
}

playGame();




