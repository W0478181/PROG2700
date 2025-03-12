### JavaScript Beginner Tutorial: Basic Operators

---

#### Introduction
In this tutorial, we will explore the **basic operators** in JavaScript. These include:

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators

We will use `console.log()` to display results in the browser's developer console.

---

#### Step-by-Step Guide

##### 1. **Arithmetic Operators**
These operators perform basic mathematical operations like addition, subtraction, multiplication, division, etc.

```javascript
// Addition (+)
let sum = 5 + 3;
console.log("Addition: 5 + 3 = " + sum); // Output: 8

// Subtraction (-)
let difference = 10 - 6;
console.log("Subtraction: 10 - 6 = " + difference); // Output: 4

// Multiplication (*)
let product = 4 * 7;
console.log("Multiplication: 4 * 7 = " + product); // Output: 28

// Division (/)
let quotient = 20 / 5;
console.log("Division: 20 / 5 = " + quotient); // Output: 4

// Modulus (%)
let remainder = 11 % 3;
console.log("Modulus: 11 % 3 = " + remainder); // Output: 2
```

##### 2. **Assignment Operators**
These operators are used to assign values to variables.

```javascript
// Basic Assignment (=)
let x = 10;
console.log("Assignment: x = " + x); // Output: 10

// Add and Assign (+=)
x += 5;  // Equivalent to: x = x + 5
console.log("Add and Assign: x += 5 -> x = " + x); // Output: 15

// Subtract and Assign (-=)
x -= 3;  // Equivalent to: x = x - 3
console.log("Subtract and Assign: x -= 3 -> x = " + x); // Output: 12

// Multiply and Assign (*=)
x *= 2;  // Equivalent to: x = x * 2
console.log("Multiply and Assign: x *= 2 -> x = " + x); // Output: 24

// Divide and Assign (/=)
x /= 4;  // Equivalent to: x = x / 4
console.log("Divide and Assign: x /= 4 -> x = " + x); // Output: 6
```

##### 3. **Comparison Operators**
These operators compare two values and return a boolean (`true` or `false`).

```javascript
// Equal to (==)
console.log("Equal to: 5 == 5 -> " + (5 == 5)); // Output: true

// Not equal to (!=)
console.log("Not equal to: 5 != 3 -> " + (5 != 3)); // Output: true

// Strict equal to (===) - checks value and type
console.log("Strict equal to: 5 === '5' -> " + (5 === '5')); // Output: false

// Greater than (>)
console.log("Greater than: 7 > 4 -> " + (7 > 4)); // Output: true

// Less than (<)
console.log("Less than: 3 < 5 -> " + (3 < 5)); // Output: true

// Greater than or equal to (>=)
console.log("Greater than or equal to: 6 >= 6 -> " + (6 >= 6)); // Output: true

// Less than or equal to (<=)
console.log("Less than or equal to: 2 <= 5 -> " + (2 <= 5)); // Output: true
```

##### 4. **Logical Operators**
These operators are used to combine two or more conditions.

```javascript
// Logical AND (&&) - true only if both expressions are true
console.log("Logical AND: true && false -> " + (true && false)); // Output: false

// Logical OR (||) - true if at least one expression is true
console.log("Logical OR: true || false -> " + (true || false)); // Output: true

// Logical NOT (!) - negates the value
console.log("Logical NOT: !true -> " + (!true)); // Output: false
```

---

#### Example of All Operators Together

```javascript
// A simple example that combines arithmetic, comparison, and logical operators:
let a = 10;
let b = 20;
let c = 15;

// Arithmetic example
let total = a + b - c;
console.log("Total (a + b - c): " + total); // Output: 15

// Comparison example
let isEqual = (a + b) === (c * 2);
console.log("Is (a + b) equal to (c * 2)? " + isEqual); // Output: true

// Logical example
let isBetween = (c > a) && (c < b);
console.log("Is c between a and b? " + isBetween); // Output: true
```

---

#### Conclusion
Now that you’ve seen how the basic operators work, you can use them in any JavaScript program to manipulate data. By using `console.log()`, you can see how these operators affect variables in real-time.

Make sure to experiment with different combinations of operators to solidify your understanding! You can run this code in your browser's JavaScript console by opening the browser's Developer Tools (usually `F12` or `Ctrl+Shift+I` in most browsers). Then copy and paste the code into the "Console" tab and press Enter to see the output.

Happy coding!
