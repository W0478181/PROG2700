### Welcome to Skills Building 10

Here are **six simple JavaScript exercises** designed to help students practice loops, conditionals, input/output operations, functions, and data structures. Each exercise includes step-by-step directions and an answer key.  Start by reading the problem and then code the solutions.  An answer is provided to assist.

---

## **Exercise 1: Multiplication Table**

### **Objective**:  
Create a program that prompts the user for a number and generates its multiplication table up to 10.

---

### **Step-by-Step Directions**:

1. **Open your Code Editor**.
2. **Create a new HTML file** and save it as `exercise11.html`.
3. Set up the basic HTML structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
4. Inside the `<script>` tag, prompt the user for a number using `prompt()`.
5. Use a `for` loop to calculate the multiplication table.
6. Use `alert()` to display the results.
7. **Run the program** by opening it in a browser.

---

### **Solution Code (Answer Key)**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multiplication Table</title>
  <script>
    function generateMultiplicationTable() {
      let number = parseInt(prompt("Enter a number to generate its multiplication table:"));
      let result = `Multiplication Table for ${number}:\n`;

      for (let i = 1; i <= 10; i++) {
        result += `${number} x ${i} = ${number * i}\n`;
      }
      alert(result);
    }
  </script>
</head>
<body onload="generateMultiplicationTable()">
</body>
</html>
```

---

---

## **Exercise 2: Even or Odd Checker**

### **Objective**:  
Prompt the user for a number and check if it is even or odd.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise12.html`.
2. Use `prompt()` to get a number from the user.
3. Use an `if-else` statement to check if the number is even or odd.
4. Display the result using `alert()`.

---

### **Solution Code (Answer Key)**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Even or Odd Checker</title>
  <script>
    function checkEvenOrOdd() {
      let number = parseInt(prompt("Enter a number:"));
      if (number % 2 === 0) {
        alert(`${number} is even.`);
      } else {
        alert(`${number} is odd.`);
      }
    }
  </script>
</head>
<body onload="checkEvenOrOdd()">
</body>
</html>
```

---

---

## **Exercise 3: Sum of Numbers**

### **Objective**:  
Prompt the user for a number and calculate the sum of all numbers from 1 to that number.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise13.html`.
2. Prompt the user to input a number.
3. Use a `for` loop to calculate the sum of all numbers from 1 to the input number.
4. Display the result using `alert()`.

---

### **Solution Code (Answer Key)**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sum of Numbers</title>
  <script>
    function calculateSum() {
      let number = parseInt(prompt("Enter a number:"));
      let sum = 0;

      for (let i = 1; i <= number; i++) {
        sum += i;
      }

      alert(`The sum of numbers from 1 to ${number} is ${sum}.`);
    }
  </script>
</head>
<body onload="calculateSum()">
</body>
</html>
```

---

---

## **Exercise 4: Find the Largest of Three Numbers**

### **Objective**:  
Prompt the user for three numbers and display the largest one.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise14.html`.
2. Use `prompt()` to get three numbers from the user.
3. Use nested `if-else` statements to find the largest number.
4. Display the largest number using `alert()`.

---

### **Solution Code (Answer Key)**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Largest of Three Numbers</title>
  <script>
    function findLargest() {
      let num1 = parseInt(prompt("Enter the first number:"));
      let num2 = parseInt(prompt("Enter the second number:"));
      let num3 = parseInt(prompt("Enter the third number:"));

      let largest;

      if (num1 > num2 && num1 > num3) {
        largest = num1;
      } else if (num2 > num3) {
        largest = num2;
      } else {
        largest = num3;
      }

      alert(`The largest number is ${largest}.`);
    }
  </script>
</head>
<body onload="findLargest()">
</body>
</html>
```

---

---

## **Exercise 5: Factorial of a Number**

### **Objective**:  
Prompt the user for a number and calculate its factorial.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise15.html`.
2. Prompt the user for a number.
3. Use a `for` loop to calculate the factorial.
4. Display the result using `alert()`.

---

### **Solution Code (Answer Key)**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Factorial</title>
  <script>
    function calculateFactorial() {
      let number = parseInt(prompt("Enter a number:"));
      let factorial = 1;

      for (let i = 1; i <= number; i++) {
        factorial *= i;
      }

      alert(`The factorial of ${number} is ${factorial}.`);
    }
  </script>
</head>
<body onload="calculateFactorial()">
</body>
</html>
```

---

---

## **Exercise 6: Reverse a String**

### **Objective**:  
Prompt the user for a string and display the reverse of that string.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise16.html`.
2. Prompt the user to input a string.
3. Use a `for` loop to reverse the string.
4. Display the reversed string using `alert()`.

---

### **Solution Code (Answer Key)**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reverse a String</title>
  <script>
    function reverseString() {
      let inputString = prompt("Enter a string:");
      let reversedString = "";

      for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
      }

      alert(`The reversed string is: ${reversedString}`);
    }
  </script>
</head>
<body onload="reverseString()">
</body>
</html>
```

---

These exercises build progressively on core programming skills like loops, conditionals, input/output operations, and functions, preparing students for success in logic and programming tasks.