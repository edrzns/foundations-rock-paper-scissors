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
    document.getElementById("round-result").textContent = "It's a tie!";
    return
  } else if ((human === "rock" && computer === "scissors") || (human === "paper" && computer === "rock") || (human === "scissors" && computer === "paper")) {
    document.getElementById("human-score").textContent = ++humanScore;
    document.getElementById("round-result").textContent = `You win! ${human} beats ${computer}`;
  } else {
    document.getElementById("computer-score").textContent = ++computerScore;
    document.getElementById("round-result").textContent = `You lose! ${computer} beats ${human}`;
  }

  if (humanScore === 5 || computerScore === 5) {
    setTimeout(() => {
      const buttonsDiv = document.querySelector('.buttons');

      if (humanScore > computerScore) {
        // Replace buttons with "You Win!" and reset button
        buttonsDiv.innerHTML = `
        <button class="button" disabled style="background-color: #4CAF50; color: white;">You Win!</button>
        <button class="button" id="reset-game">Play Again</button>
      `;
      } else {
        // Replace buttons with "You Lose!" and reset button
        buttonsDiv.innerHTML = `
        <button class="button" disabled style="background-color: #f44336; color: white;">You Lose!</button>
        <button class="button" id="reset-game">Play Again</button>
      `;
      }

      document.getElementById("reset-game").addEventListener("click", resetGame);
    }, 100);
  }

  function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("human-score").textContent = 0;
    document.getElementById("computer-score").textContent = 0;
    document.getElementById("round-result").textContent = "Click to play!"

    const buttonsDiv = document.querySelector('.buttons');
    buttonsDiv.innerHTML = `
    <button class="button" id="rock">Rock</button>
    <button class="button" id="paper">Paper</button>
    <button class="button" id="scissors">Scissors</button>
  `;

    ["rock", "paper", "scissors"].forEach(choice => {
      document.getElementById(choice).addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        playRound(choice, computerChoice);
      });
    });
  }
}

["rock", "paper", "scissors"].forEach(choice => {
  document.getElementById(choice).addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound(choice, computerChoice);
  });
});