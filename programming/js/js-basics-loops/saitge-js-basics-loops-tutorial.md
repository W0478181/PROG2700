### JavaScript Beginner Tutorial: Looping

---

#### Introduction
Loops allow us to run a block of code multiple times, reducing repetition. In this tutorial, we will explore the main types of loops in JavaScript:

1. **`for` loop**
2. **`while` loop**
3. **`do...while` loop**
4. **`for...of` loop**
5. **`for...in` loop**

We will use `console.log()` to see how each loop works by displaying results in the console.

---

#### Step-by-Step Guide

##### 1. **`for` Loop**

The `for` loop runs a block of code a specific number of times. It's great when you know exactly how many times you want to iterate.

```javascript
// The basic structure of a 'for' loop:
// for (initialization; condition; update) { 
//     // Code to run in each iteration
// }

console.log("For Loop Example:");

// Print numbers 1 to 5 using a for loop
for (let i = 1; i <= 5; i++) {
    console.log(i); // Output: 1, 2, 3, 4, 5
}
```

Explanation:
- `i = 1`: Initialization of the loop variable `i`.
- `i <= 5`: Condition to check before each loop iteration.
- `i++`: Increments `i` after each iteration.

##### 2. **`while` Loop**

The `while` loop repeats a block of code as long as a condition is true. It's useful when the number of iterations isn't known upfront.

```javascript
console.log("While Loop Example:");

// Print numbers 1 to 5 using a while loop
let j = 1;  // Initialize a variable outside the loop
while (j <= 5) {
    console.log(j); // Output: 1, 2, 3, 4, 5
    j++;  // Increment j after each loop iteration
}
```

Explanation:
- The loop runs while `j <= 5`. Once `j` becomes greater than 5, the loop stops.

##### 3. **`do...while` Loop**

A `do...while` loop is similar to a `while` loop, but it guarantees that the block of code will run at least once, even if the condition is false from the start.

```javascript
console.log("Do...While Loop Example:");

// Print numbers 1 to 5 using a do...while loop
let k = 1;
do {
    console.log(k); // Output: 1, 2, 3, 4, 5
    k++;
} while (k <= 5);
```

Explanation:
- The code inside the `do` block runs **before** the condition is checked. The loop will run at least once, even if the condition is false.

##### 4. **`for...of` Loop**

The `for...of` loop is used to iterate over arrays or other iterable objects. It allows you to loop through each element in a collection.

```javascript
console.log("For...Of Loop Example:");

// Example array
let fruits = ["apple", "banana", "cherry"];

// Loop through each element in the array
for (let fruit of fruits) {
    console.log(fruit); // Output: apple, banana, cherry
}
```

Explanation:
- The `for...of` loop goes through each element (`fruit`) in the array (`fruits`) and outputs it.

##### 5. **`for...in` Loop**

The `for...in` loop is used to loop through the properties of an object. It's best for working with object keys, not arrays.

```javascript
console.log("For...In Loop Example:");

// Example object
let car = { brand: "Toyota", model: "Corolla", year: 2020 };

// Loop through the properties of the object
for (let key in car) {
    console.log(key + ": " + car[key]); 
    // Output: 
    // brand: Toyota
    // model: Corolla
    // year: 2020
}
```

Explanation:
- The `for...in` loop iterates over the keys (`brand`, `model`, `year`) of the `car` object and prints both the key and its corresponding value.

---

#### Example of Combining Loops

Let’s look at a practical example where we combine different loops:

```javascript
console.log("Combined Loops Example:");

// Using a for loop to print the elements of an array
let numbers = [1, 2, 3, 4, 5];

console.log("Using a for loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // Output: 1, 2, 3, 4, 5
}

// Using a while loop to print the elements of an array
console.log("Using a while loop:");
let index = 0;
while (index < numbers.length) {
    console.log(numbers[index]); // Output: 1, 2, 3, 4, 5
    index++;
}

// Using a for...of loop to print the elements of an array
console.log("Using a for...of loop:");
for (let num of numbers) {
    console.log(num); // Output: 1, 2, 3, 4, 5
}
```

---

#### Conclusion

In this tutorial, we learned about different types of loops in JavaScript and how to use them to repeat tasks. Each loop type is suited for different situations:

- **`for` loop**: When you know how many times to loop.
- **`while` loop**: When the number of iterations depends on a condition.
- **`do...while` loop**: When you want the code to run at least once.
- **`for...of` loop**: Best for iterating over arrays.
- **`for...in` loop**: Best for iterating over object properties.

---

You can copy and paste this code into the console of your browser’s Developer Tools to see the results in real-time. Experiment with the values to see how the loops behave with different conditions.

Happy coding!
