console.log("Hello World")

// Step 1: Write the logic to get the computer choice
//
// Create function named getComputerChoice
// Generate random number between 0 and 1 using Math.random()
// Multiply the random nuber by 3
// Round result to nearest whole number with Math.floor()
//   IF number is 0 THEN
//      return "rock"
//   ELSE IF number is 1 THEN
//      return "paper"
//   ELSE
//      return "scissors"
// Test what function returns with console.log()

function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice < 0.33) {
    return "rock"
  } else if (computerChoice < 0.66) {
    return "paper"
  } else {
    return "scissors"
  }
}

console.log(getComputerChoice());

// Step 2: Write the logic to get the human choice
//
// Create function named getHumanChoice
// Use prompt method to prompt user asking for "rock", "paper", or "scissors"
// Store user's input in a variable
// Convert user's input to lowercase
// RETURN the variable containing user's choice
// Test what function returns with console.log()

function getHumanChoice() {
  const humanChoice = prompt("Enter your choice (rock, paper, or scissors): ")
  return humanChoice.toLowerCase()
}

console.log(getHumanChoice());

// Step 3: Declare the players score variables
//
// Declare a variable called humanScore in the global scope and set it to 0
// Declare a variable called computerScore in the global scope and set it to 0

let humanScore = 0;
let computerScore = 0;

// Step 4: Write the logic to play a single round
//
// Crete function named playRound with parameters humanChoice and computerChoice
// Convert humanChoice to lowercase and store it in a new variable
// IF humanChoice is equal to computerChoice THEN
//     Print "It's a tie!"
//     (Do not increment any score)
// ELSE IF (humanChoice is "rock" AND computerChoice is "scissors")
//       OR (humanChoice is "paper" AND computerChoice is "rock")
//       OR (humanChoice is "scissors" AND computerChoice is "paper") THEN
//     Print "You win! [humanChoice] beats [computerChoice]"
//     Increment humanScore by 1
// ELSE
//     Print "You lose! [computerChoice] beats [humanChoice]"
//     Increment computerScore by 1
// END IF

function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


// Step 5: Write the logic to play the entire game
//
// Create function named playGame
//  Declare humanScore and computerScore, and set both to 0
//  Create function named playRound with parameters humanChoice and computerChoice
//      Convert humanChoice to lowercase
//      IF humanChoice is equal to computerChoice THEN
//         Print "It's a tie!"
//      ELSE IF (humanChoice is "rock" AND computerChoice is "scissors")
//           OR (humanChoice is "paper" AND computerChoice is "rock")
//           OR (humanChoice is "scissors" AND computerChoice is "paper") THEN
//         Print "You win! [humanChoice] beats [computerChoice]"
//         Increment humanScore by 1
//      ELSE
//         Print "You lose! [computerChoice] beats [humanChoice]"
//         Increment computerScore by 1
//      END IF
//  END FUNCTION
//
//  Repeat 5 times:
//      Get the human's choice using getHumanChoice
//      Get the computer's choice using getComputerChoice
//      Call playRound with the human and computer choices
//
//  Print final scores
//     IF humanScore is greater than computerScore THEN
//         Print "You are the overall winner!"
//     ELSE IF computerScore is greater than humanScore THEN
//         Print "The computer is the overall winner!"
//     ELSE
//         Print "The game is a tie!"
//     END IF
// END FUNCTION