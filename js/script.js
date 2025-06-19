console.log("Hello World")

// Step 2: Write the logic to get the computer choice
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


// Step 3: Write the logic to get the human choice
//
// Create function named getHumanChoice
// Use prompt method to prompt user asking for "rock", "paper", or "scissors"
// Store user's input in a variable
// Convert user's input to lowercase
// RETURN the variable containing user's choice
// Test what function returns with console.log()


// Step 4: Declare the players score variables
//
// Declare a variable called humanScore in the global scope and set it to 0
// Declare a variable called computerScore in the global scope and set it to 0


// Step 5: Write the logic to play a single round
//
// Crete function playRound with parameters humanChoice and computerChoice
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
