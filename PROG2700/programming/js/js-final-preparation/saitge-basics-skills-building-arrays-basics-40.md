Here’s a **series of six JavaScript exercises** focused on arrays. These exercises will help students understand how to work with arrays, including accessing elements, modifying arrays, and looping through them.

---

## **Exercise 1: Accessing Array Elements**

### **Objective**:  
Create an array of numbers and prompt the user to input an index. Display the element at that index in the array.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise41.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Create an array of numbers.
    - Prompt the user to enter an index.
    - Display the element at that index using `alert()`.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Access Array Element</title>
  <script>
    function accessArrayElement() {
      let numbers = [10, 20, 30, 40, 50];
      let index = parseInt(prompt("Enter an index to access (0-4):"));
      alert(`Element at index ${index}: ${numbers[index]}`);
    }
  </script>
</head>
<body onload="accessArrayElement()">
</body>
</html>
```

---

## **Exercise 2: Adding Items to an Array**

### **Objective**:  
Create an array of fruits and allow the user to add a new fruit to the array. Display the updated array.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise42.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Create an array of fruits.
    - Prompt the user to input a new fruit.
    - Add the new fruit to the array using the `push()` method.
    - Display the updated array using `alert()`.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Add Item to Array</title>
  <script>
    function addItemToArray() {
      let fruits = ["Apple", "Banana", "Cherry"];
      let newFruit = prompt("Enter a new fruit to add to the array:");
      fruits.push(newFruit);
      alert(`Updated Array: ${fruits}`);
    }
  </script>
</head>
<body onload="addItemToArray()">
</body>
</html>
```

---

## **Exercise 3: Remove Item from Array**

### **Objective**:  
Create an array of numbers and allow the user to remove a number from the array by entering the number to be removed.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise43.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Create an array of numbers.
    - Prompt the user to enter a number to remove.
    - Remove the number from the array using `splice()`.
    - Display the updated array using `alert()`.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Remove Item from Array</title>
  <script>
    function removeItemFromArray() {
      let numbers = [1, 2, 3, 4, 5];
      let numberToRemove = parseInt(prompt("Enter a number to remove (1-5):"));
      let index = numbers.indexOf(numberToRemove);
      
      if (index !== -1) {
        numbers.splice(index, 1);
        alert(`Updated Array: ${numbers}`);
      } else {
        alert("Number not found in the array.");
      }
    }
  </script>
</head>
<body onload="removeItemFromArray()">
</body>
</html>
```

---

## **Exercise 4: Loop Through an Array**

### **Objective**:  
Create an array of colors and loop through the array to display each color in the console.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise44.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Create an array of colors.
    - Use a `for` loop to loop through the array and log each color to the console.
4. **Save and run the file** in a browser, and open the browser’s developer tools to view the console output.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Loop Through Array</title>
  <script>
    function loopThroughArray() {
      let colors = ["Red", "Green", "Blue", "Yellow"];
      for (let i = 0; i < colors.length; i++) {
        console.log(colors[i]);
      }
    }
  </script>
</head>
<body onload="loopThroughArray()">
</body>
</html>
```

---

## **Exercise 5: Find the Largest Number in an Array**

### **Objective**:  
Create an array of numbers and find the largest number using a loop.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise45.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Create an array of numbers.
    - Loop through the array to find the largest number.
    - Display the largest number using `alert()`.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Find Largest Number</title>
  <script>
    function findLargestNumber() {
      let numbers = [45, 12, 78, 34, 23];
      let largest = numbers[0];

      for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
          largest = numbers[i];
        }
      }

      alert(`The largest number is: ${largest}`);
    }
  </script>
</head>
<body onload="findLargestNumber()">
</body>
</html>
```

---

## **Exercise 6: Check if a Value Exists in an Array**

### **Objective**:  
Create an array of strings and ask the user to input a value. Check if the value exists in the array.

---

### **Step-by-Step Directions**:

1. **Create a new HTML file** and save it as `exercise46.html`.
2. Set up the basic HTML structure with `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<script>` tag:
    - Create an array of strings.
    - Prompt the user to input a value.
    - Check if the value exists in the array using `indexOf()`.
    - Display an appropriate message using `alert()`.
4. **Save and run the file** in a browser.

---

### **Answer Key**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Check Value in Array</title>
  <script>
    function checkValueInArray() {
      let animals = ["Cat", "Dog", "Lion", "Elephant"];
      let value = prompt("Enter an animal name to check if it's in the array:");

      if (animals.indexOf(value) !== -1) {
        alert(`${value} is in the array!`);
      } else {
        alert(`${value} is not in the array.`);
      }
    }
  </script>
</head>
<body onload="checkValueInArray()">
</body>
</html>
```


