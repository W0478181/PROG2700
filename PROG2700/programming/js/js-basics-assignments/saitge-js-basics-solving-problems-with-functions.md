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

Encourage students to test their program with multiple inputs to ensure all cases work correctly.