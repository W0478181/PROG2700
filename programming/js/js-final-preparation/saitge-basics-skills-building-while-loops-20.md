
### Welcome to Skills Building 20

Here are **six simple JavaScript exercises** focused on **while loops**, with step-by-step directions for students to complete, and the **answer keys** provided at the bottom.

These exercises help students practice using `while` loops to solve problems related to iteration, number handling, user input, and game logic, preparing them for future coding challenges.

---

## **Exercise 1: Countdown from 10**

### **Objective**:  
Create a program that counts down from 10 to 1 using a `while` loop.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise20.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Use a `while` loop to count down from 10.
    - Use `alert()` to display each number as it counts down.
4. **Save and run the file** by opening it in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Countdown from 10</title>
  <script>
    function countdown() {
      let number = 10;
      while (number > 0) {
        alert(number);
        number--;
      }
    }
  </script>
</head>
<body onload="countdown()">
</body>
</html>
```

---

---

## **Exercise 2: Sum of Numbers Until Zero**

### **Objective**:  
Prompt the user for numbers and calculate their sum until the user enters zero.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise22.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Use a `while` loop to continuously prompt the user for numbers until they enter `0`.
    - Accumulate the sum of the numbers entered.
    - Display the total sum using `alert()`.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sum of Numbers Until Zero</title>
  <script>
    function sumUntilZero() {
      let sum = 0;
      let number;
      
      while (true) {
        number = parseInt(prompt("Enter a number (enter 0 to stop):"));
        if (number === 0) break;
        sum += number;
      }

      alert(`The total sum is: ${sum}`);
    }
  </script>
</head>
<body onload="sumUntilZero()">
</body>
</html>
```

---

---

## **Exercise 3: Display Even Numbers**

### **Objective**:  
Using a `while` loop, display all even numbers from 2 to 20.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise23.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Use a `while` loop to display all even numbers between 2 and 20.
    - Use `alert()` to display each even number.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Display Even Numbers</title>
  <script>
    function displayEvenNumbers() {
      let number = 2;
      while (number <= 20) {
        alert(number);
        number += 2;
      }
    }
  </script>
</head>
<body onload="displayEvenNumbers()">
</body>
</html>
```

---

---

## **Exercise 4: Guess the Number Game**

### **Objective**:  
Prompt the user to guess a number between 1 and 10. If they guess incorrectly, prompt them again until they guess correctly.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise24.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Generate a random number between 1 and 10.
    - Use a `while` loop to prompt the user to guess the number until they guess correctly.
    - Display a success message when they guess correctly.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Guess the Number</title>
  <script>
    function guessTheNumber() {
      let numberToGuess = Math.floor(Math.random() * 10) + 1;
      let guess;

      while (true) {
        guess = parseInt(prompt("Guess a number between 1 and 10:"));
        if (guess === numberToGuess) {
          alert("Correct! You've guessed the right number.");
          break;
        } else {
          alert("Wrong guess, try again.");
        }
      }
    }
  </script>
</head>
<body onload="guessTheNumber()">
</body>
</html>
```

---

---

## **Exercise 5: Print Fibonacci Sequence**

### **Objective**:  
Use a `while` loop to print the first 10 numbers in the Fibonacci sequence.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise25.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Initialize the first two numbers of the Fibonacci sequence (`0` and `1`).
    - Use a `while` loop to print the next numbers in the sequence until you reach 10 numbers.
    - Display each Fibonacci number using `alert()`.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fibonacci Sequence</title>
  <script>
    function printFibonacci() {
      let a = 0, b = 1, count = 0;
      while (count < 10) {
        alert(a);
        let next = a + b;
        a = b;
        b = next;
        count++;
      }
    }
  </script>
</head>
<body onload="printFibonacci()">
</body>
</html>
```

---

---

## **Exercise 6: Number of Digits in a Number**

### **Objective**:  
Prompt the user for a number and display how many digits it contains using a `while` loop.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise26.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Prompt the user to enter a number.
    - Use a `while` loop to count the digits in the number by dividing it by 10 until it becomes 0.
    - Display the result using `alert()`.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Number of Digits</title>
  <script>
    function countDigits() {
      let number = parseInt(prompt("Enter a number:"));
      let count = 0;

      while (number > 0) {
        count++;
        number = Math.floor(number / 10);
      }

      alert(`The number has ${count} digits.`);
    }
  </script>
</head>
<body onload="countDigits()">
</body>
</html>
```

