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

console.log(getComputerChoice());