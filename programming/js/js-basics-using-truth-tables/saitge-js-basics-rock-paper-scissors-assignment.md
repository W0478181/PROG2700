### **Assignment: Develop a Rock, Paper, Scissors Game Using Procedural JavaScript**  

**Objective:**  
Design a program that implements the game **Rock, Paper, Scissors**. Use a Boolean logic table to determine the winner. While the program should primarily follow procedural programming principles, using functions is encouraged for better organization.  

---

#### **Task Overview:**  
1. **Create a Boolean Logic Table**  
   - Use a truth table to represent the outcomes of the game.  
   - Consider the rules:  
     - Rock beats Scissors  
     - Scissors beats Paper  
     - Paper beats Rock  
     - Identical choices result in a tie  

| Player 1 Choice | Player 2 Choice | Player 1 Wins | Player 2 Wins | Tie |  
|------------------|------------------|---------------|---------------|-----|  
| Rock             | Rock             | false         | false         | true |  
| Rock             | Paper            | false         | true          | false |  
| Rock             | Scissors         | true          | false         | false |  
| Paper            | Rock             | true          | false         | false |  
| Paper            | Paper            | false         | false         | true |  
| Paper            | Scissors         | false         | true          | false |  
| Scissors         | Rock             | false         | true          | false |  
| Scissors         | Paper            | true          | false         | false |  
| Scissors         | Scissors         | false         | false         | true |  

---

#### **Requirements:**  
1. **User Input:**  
   - Prompt Player 1 and Player 2 to choose "Rock", "Paper", or "Scissors".  

2. **Game Logic:**  
   - Use a Boolean logic table to decide the winner based on the players’ choices.  

3. **Output:**  
   - Announce the winner (Player 1 or Player 2) or declare a tie.  

4. **Code Structure:**  
   - Follow procedural principles.  
   - Use functions to:  
     - Get user input  
     - Compare choices and decide the winner  
     - Print the result  

5. **Bonus Challenge (Optional):**  
   - Add a loop to allow multiple rounds and keep track of the score for each player.  

---

#### **Example Code Structure (Skeleton):**  
```javascript
// Choices: Rock, Paper, Scissors
function getPlayerChoice(playerNumber) {
    let choice = prompt(`Player ${playerNumber}, enter Rock, Paper, or Scissors:`).toLowerCase();
    return choice;
}

function decideWinner(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        return "tie";
    } else if (
        (player1Choice === "rock" && player2Choice === "scissors") ||
        (player1Choice === "paper" && player2Choice === "rock") ||
        (player1Choice === "scissors" && player2Choice === "paper")
    ) {
        return "player1";
    } else {
        return "player2";
    }
}

function printResult(winner) {
    if (winner === "tie") {
        console.log("It's a tie!");
    } else {
        console.log(`${winner} wins the game!`);
    }
}

// Main Game Logic
let player1 = getPlayerChoice(1);
let player2 = getPlayerChoice(2);
let winner = decideWinner(player1, player2);
printResult(winner);
```

---

#### **Deliverables:**  
1. **Boolean Logic Table:** Write the table in your notes and submit it with your assignment.  
2. **JavaScript Program:** Submit the completed program implementing the logic. Ensure it meets the requirements.  
3. **Reflection:** Briefly explain how you used the Boolean logic table to implement the game logic.  

---

#### **Evaluation Criteria:**  
- **Correctness:** Does the program correctly determine the winner based on the logic table?  
- **Code Quality:** Are variables named appropriately? Are functions used where appropriate?  
- **User Experience:** Is the program clear and easy to use?  
---
