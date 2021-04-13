let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generate secretTarget Number
const generateTarget = () => randNum = Math.floor(Math.random()*10)

// comparing the guess (finding which is closest to the secret number)
const compareGuesses = (userGuess, computerGuess, secretGuess) => {

  if (userGuess < 0 || userGuess > 9) {
    alert('Out of range. Guess between 1 and 9.')
    return false;
  };

  let evalUserGuess = Math.abs(userGuess - secretGuess)
  let evalComputerGuess = Math.abs(secretGuess - computerGuess)
  if (evalUserGuess <= evalComputerGuess) {
    return true;
  } else {
    return false;
  };
  /*
  if ((Math.abs(evalUserGuess - secretGuess) <= (Math.abs(evalComputerGuess - secretGuess)))) {
    return 'human';
  } else return 'computer';*/
};
const updateScore = winner => {
  if (winner === 'human') {
    humanScore ++;
  } else {
    return computerScore ++;
  }
} 

const advanceRound = () => currentRoundNumber ++;
