function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getHumanChoice() {
    const humanChoice = prompt("Enter your choice (rock, paper, or scissors): ")
    return humanChoice.toLowerCase()
  }

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

  function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (human === computer) {
      console.log("It's a tie!");
      return
    } else if ((human === "rock" && computer === "scissors") || (human === "paper" && computer === "rock") || (human === "scissors" && computer === "paper")) {
      humanScore++;
      console.log(`You win! ${human.charAt(0).toUpperCase() + human.slice(1)} beats ${computer.charAt(0).toUpperCase() + computer.slice(1)}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${human.charAt(0).toUpperCase() + human.slice(1)}`);
    }
  }

  // playRound(getHumanChoice(), getComputerChoice());
  // playRound(getHumanChoice(), getComputerChoice());
  // playRound(getHumanChoice(), getComputerChoice());
  // playRound(getHumanChoice(), getComputerChoice());
  // playRound(getHumanChoice(), getComputerChoice());

  console.log("Final Score: ");
  console.log(`You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie!")
  }
}

playGame();