function getPlayerChoice(playernumber) {
    let choice = prompt(`Player ${playernumber}, enter Rock, Paper, Scissors`).toLowerCase();
    return choice;
}

function decideWinner(player1choice, player2choice) {
  if (player1choice === player2choice) {
    return "tie";
  } else if (
    (player1choice === "rock" && player2choice === "scissors") ||
    (player1choice === "paper" && player2choice === "rock") ||
    (player1choice === "scissors" && player2choice === "paper")
  ) {
    return "Player1";
  } else {
    return "Player2";
  }
}

function printResult() {
   if (winner === "tie") {
    document.getElementById("output").innerHTML = "It's a Tie";
    // console.log("It's a tie.");
   } else {
    document.getElementById("output").innerHTML = `${winner} wins the game!`;
    // console.log(`${winner} wins the game!`);
   }
}

// Main

let player1 = getPlayerChoice(1);
let player2 = getPlayerChoice(2);
let winner = decideWinner(player1, player2);
printResult(winner); 