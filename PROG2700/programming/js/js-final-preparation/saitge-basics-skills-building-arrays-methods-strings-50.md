Here’s another series of **JavaScript exercises** focused on **manipulating the data within an array**. These exercises will help students practice how to modify array elements, filter data, and manipulate array content using methods like `map()`, `filter()`, and `reduce()`.

---

## **Exercise 1: Double the Values in an Array**

### **Objective**:  
Create an array of numbers and use the `map()` method to create a new array with all values doubled.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise51.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Create an array of numbers.
    - Use the `map()` method to double each number in the array.
    - Display the new array using `alert()`.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Double Values in Array</title>
  <script>
    function doubleValues() {
      let numbers = [1, 2, 3, 4, 5];
      let doubledNumbers = numbers.map(num => num * 2);
      alert(`Doubled Values: ${doubledNumbers}`);
    }
  </script>
</head>
<body onload="doubleValues()">
</body>
</html>
```

---

## **Exercise 2: Filter Even Numbers from an Array**

### **Objective**:  
Create an array of numbers and use the `filter()` method to create a new array containing only even numbers.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise52.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Create an array of numbers.
    - Use the `filter()` method to create a new array with only even numbers.
    - Display the filtered array using `alert()`.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Filter Even Numbers</title>
  <script>
    function filterEvenNumbers() {
      let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
      let evenNumbers = numbers.filter(num => num % 2 === 0);
      alert(`Even Numbers: ${evenNumbers}`);
    }
  </script>
</head>
<body onload="filterEvenNumbers()">
</body>
</html>
```

---

## **Exercise 3: Find the Sum of All Numbers in an Array**

### **Objective**:  
Create an array of numbers and use the `reduce()` method to find the sum of all the numbers in the array.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise53.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Create an array of numbers.
    - Use the `reduce()` method to find the sum of all numbers.
    - Display the sum using `alert()`.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sum of All Numbers</title>
  <script>
    function sumOfNumbers() {
      let numbers = [1, 2, 3, 4, 5];
      let sum = numbers.reduce((acc, num) => acc + num, 0);
      alert(`Sum of Numbers: ${sum}`);
    }
  </script>
</head>
<body onload="sumOfNumbers()">
</body>
</html>
```

---

## **Exercise 4: Add a Prefix to Each String in an Array**

### **Objective**:  
Create an array of strings and use the `map()` method to add a prefix to each string.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise54.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Create an array of strings.
    - Use the `map()` method to add a prefix to each string.
    - Display the new array using `alert()`.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Add Prefix to Strings</title>
  <script>
    function addPrefixToStrings() {
      let fruits = ["Apple", "Banana", "Cherry"];
      let prefixedFruits = fruits.map(fruit => "Fresh " + fruit);
      alert(`Fruits with Prefix: ${prefixedFruits}`);
    }
  </script>
</head>
<body onload="addPrefixToStrings()">
</body>
</html>
```

---

## **Exercise 5: Remove All Instances of a Value from an Array**

### **Objective**:  
Create an array of numbers and remove all instances of a specific value from the array.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise55.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Create an array of numbers.
    - Prompt the user to enter a value to remove from the array.
    - Use the `filter()` method to remove all instances of the value.
    - Display the updated array using `alert()`.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Remove Value from Array</title>
  <script>
    function removeValueFromArray() {
      let numbers = [1, 2, 3, 2, 4, 2, 5];
      let valueToRemove = parseInt(prompt("Enter a number to remove from the array:"));
      let updatedArray = numbers.filter(num => num !== valueToRemove);
      alert(`Updated Array: ${updatedArray}`);
    }
  </script>
</head>
<body onload="removeValueFromArray()">
</body>
</html>
```

---

## **Exercise 6: Sort an Array of Strings**

### **Objective**:  
Create an array of strings and sort them alphabetically.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise56.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Create an array of strings.
    - Use the `sort()` method to sort the strings alphabetically.
    - Display the sorted array using `alert()`.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sort Array of Strings</title>
  <script>
    function sortStrings() {
      let colors = ["Red", "Blue", "Green", "Yellow"];
      let sortedColors = colors.sort();
      alert(`Sorted Colors: ${sortedColors}`);
    }
  </script>
</head>
<body onload="sortStrings()">
</body>
</html>
```


