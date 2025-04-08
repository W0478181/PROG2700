### Welcome to Skills Building 30

Here’s a **series of six JavaScript exercises** using `do while` loops. These exercises are designed to help students understand and practice the behavior of `do while` loops with simple tasks.

---

## **Exercise 1: Ask for a Positive Number**

### **Objective**:  
Prompt the user to enter a positive number. Keep asking until the user enters a number greater than zero.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise31.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Use a `do while` loop to prompt the user for a number.
    - Check if the number is greater than zero.
    - If the number is not positive, continue asking.
    - Once a valid number is entered, show an alert with the number.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Positive Number Prompt</title>
  <script>
    function askForPositiveNumber() {
      let number;
      do {
        number = parseInt(prompt("Please enter a positive number:"));
      } while (number <= 0);

      alert(`You entered: ${number}`);
    }
  </script>
</head>
<body onload="askForPositiveNumber()">
</body>
</html>
```

---

## **Exercise 2: Reverse String**

### **Objective**:  
Prompt the user to enter a string. Use a `do while` loop to reverse the string and display it.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise32.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Prompt the user for a string.
    - Use a `do while` loop to reverse the string.
    - Display the reversed string using `alert()`.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Reverse String</title>
  <script>
    function reverseString() {
      let str = prompt("Enter a string to reverse:");
      let reversedStr = "";
      
      do {
        reversedStr = str.charAt(0) + reversedStr;
        str = str.substring(1);
      } while (str.length > 0);

      alert(`Reversed string: ${reversedStr}`);
    }
  </script>
</head>
<body onload="reverseString()">
</body>
</html>
```

---

## **Exercise 3: Guess the Word Game**

### **Objective**:  
Ask the user to guess a secret word. If they guess wrong, ask them again. Continue until they guess the correct word.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise33.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Set a secret word.
    - Use a `do while` loop to ask the user to guess the word.
    - Continue asking until the user guesses the correct word.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Guess the Word Game</title>
  <script>
    function guessTheWord() {
      let secretWord = "javascript";
      let guess;

      do {
        guess = prompt("Guess the secret word:");
      } while (guess !== secretWord);

      alert("Correct! You guessed the word!");
    }
  </script>
</head>
<body onload="guessTheWord()">
</body>
</html>
```

---

## **Exercise 4: Factorial Calculator**

### **Objective**:  
Use a `do while` loop to calculate the factorial of a number entered by the user.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise34.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Prompt the user to enter a number.
    - Use a `do while` loop to calculate the factorial of the number.
    - Display the result using `alert()`.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Factorial Calculator</title>
  <script>
    function calculateFactorial() {
      let num = parseInt(prompt("Enter a number to calculate its factorial:"));
      let factorial = 1;
      
      if (num < 0) {
        alert("Factorial is not defined for negative numbers.");
        return;
      }

      do {
        factorial *= num;
        num--;
      } while (num > 0);

      alert(`The factorial is: ${factorial}`);
    }
  </script>
</head>
<body onload="calculateFactorial()">
</body>
</html>
```

---

## **Exercise 5: Sum of Numbers**

### **Objective**:  
Prompt the user for numbers and sum them until the user enters `0`.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise35.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Use a `do while` loop to ask the user to input numbers.
    - Sum the numbers and stop when the user enters `0`.
    - Display the total sum using `alert()`.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sum of Numbers</title>
  <script>
    function sumNumbers() {
      let sum = 0;
      let number;

      do {
        number = parseInt(prompt("Enter a number (enter 0 to stop):"));
        sum += number;
      } while (number !== 0);

      alert(`The total sum is: ${sum}`);
    }
  </script>
</head>
<body onload="sumNumbers()">
</body>
</html>
```

---

## **Exercise 6: Number Divisibility Check**

### **Objective**:  
Ask the user to enter a number and check if it is divisible by 3. Keep asking until the user enters a number divisible by 3.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise36.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Use a `do while` loop to ask the user to enter a number.
    - Check if the number is divisible by 3.
    - If not, ask the user to enter another number.
    - Stop once the user enters a number divisible by 3.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Divisibility by 3 Check</title>
  <script>
    function checkDivisibility() {
      let number;
      
      do {
        number = parseInt(prompt("Enter a number to check if it's divisible by 3:"));
      } while (number % 3 !== 0);

      alert(`The number ${number} is divisible by 3.`);
    }
  </script>
</head>
<body onload="checkDivisibility()">
</body>
</html>
```

---

These exercises will help students get familiar with the `do while` loop, allowing them to iterate until a condition is met while learning basic programming tasks such as checking conditions, calculating sums, and working with string manipulations.