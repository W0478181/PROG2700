##### 3. **Common String Methods**

JavaScript provides several methods to manipulate and search within strings.

This tutorial will cover:

3. **Common String Methods**
4. **Advanced String Manipulation**

---
3. **Common String Methods**

###### **`toUpperCase()` and `toLowerCase()`**

You can change the case of a string using these methods.

```javascript
console.log("Changing String Case:");

// Converting to uppercase
let lowerCaseString = "hello";
let upperCaseString = lowerCaseString.toUpperCase();
console.log("Uppercase string:", upperCaseString);  // Output: HELLO

// Converting to lowercase
let mixedCaseString = "HeLLo WoRLd!";
let lowerCaseConverted = mixedCaseString.toLowerCase();
console.log("Lowercase string:", lowerCaseConverted);  // Output: hello world!
```

---

###### **`charAt()`**

The `charAt()` method returns the character at a specified index.

```javascript
console.log("charAt Example:");

// Getting the character at index 1
let word = "JavaScript";
console.log("Character at index 1:", word.charAt(1));  // Output: a
```
###### **`indexOf()` and `lastIndexOf()`**

- `indexOf()` returns the index of the first occurrence of a specified substring.
- `lastIndexOf()` returns the index of the last occurrence of a specified substring.

```javascript
console.log("indexOf and lastIndexOf:");

// Finding the first occurrence of a substring
let sentence = "The quick brown fox jumps over the lazy dog.";
console.log("First 'o' is at index:", sentence.indexOf("o"));  // Output: 12

// Finding the last occurrence of a substring
console.log("Last 'o' is at index:", sentence.lastIndexOf("o"));  // Output: 41
```

---

###### **`slice()`**

The `slice()` method extracts a part of a string and returns it as a new string. It takes two arguments: the start index and the end index.

```javascript
console.log("slice Example:");

// Extracting a substring
let slicedString = sentence.slice(4, 9);
console.log("Sliced string:", slicedString);  // Output: quick
```

---

###### **`substring()` and `substr()`**

- `substring()` is similar to `slice()` but doesn't accept negative values for indices.
- `substr()` extracts part of a string, starting at a given index and returning a specified number of characters.

```javascript
console.log("substring and substr Example:");

// Using substring
console.log("Using substring:", sentence.substring(10, 19));  // Output: brown fox

// Using substr
console.log("Using substr:", sentence.substr(10, 5));  // Output: brown
```

---

###### **`replace()`**

The `replace()` method is used to replace part of a string with another string. It only replaces the first occurrence unless a regular expression is used with the global flag (`g`).

```javascript
console.log("replace Example:");

// Replacing part of a string
let newSentence = sentence.replace("fox", "cat");
console.log("Replaced string:", newSentence);  // Output: The quick brown cat jumps over the lazy dog.
```

---

###### **`split()`**

The `split()` method splits a string into an array of substrings, based on a specified separator.

```javascript
console.log("split Example:");

// Splitting a string by spaces
let wordsArray = sentence.split(" ");
console.log("Words array:", wordsArray);  
// Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

// Splitting by a character
let lettersArray = sentence.split("");
console.log("Letters array:", lettersArray);
```

---

##### 4. **Advanced String Manipulation**

Here are some additional useful methods and techniques for string manipulation in JavaScript.

---

###### **`trim()`**

The `trim()` method removes whitespace from both ends of a string.

```javascript
console.log("trim Example:");

// Removing extra spaces
let spacedString = "    Hello, World!    ";
console.log("Trimmed string:", spacedString.trim());  // Output: "Hello, World!"
```

---

###### **`includes()`**

The `includes()` method checks if a string contains a specified substring, returning `true` or `false`.

```javascript
console.log("includes Example:");

// Checking if a string contains a word
console.log("Contains 'quick'?", sentence.includes("quick"));  // Output: true
console.log("Contains 'cat'?", sentence.includes("cat"));  // Output: false
```

---

###### **`repeat()`**

The `repeat()` method returns a new string with a specified number of copies of the original string.

```javascript
console.log("repeat Example:");

// Repeating a string
let repeatString = "Hello! ".repeat(3);
console.log("Repeated string:", repeatString);  // Output: Hello! Hello! Hello! 
```

---

###### **Template Literals and String Interpolation**

Template literals allow you to embed variables directly into strings using backticks `` ` `` and `${}` syntax.

```javascript
console.log("Template Literals Example:");

// Using template literals for string interpolation
let age = 25;
let interpolatedString = `I am ${age} years old.`;
console.log(interpolatedString);  // Output: I am 25 years old.
```

---

#### Example: Manipulating a Complex String

Let’s use several of the string methods to manipulate a sentence.

```javascript
console.log("Complex String Manipulation Example:");

let text = "   JavaScript is a great programming language.    ";

// Trim the text
let trimmedText = text.trim();
console.log("Trimmed text:", trimmedText);  // Output: JavaScript is a great programming language.

// Convert to uppercase
let upperCaseText = trimmedText.toUpperCase();
console.log("Uppercase text:", upperCaseText);  // Output: JAVASCRIPT IS A GREAT PROGRAMMING LANGUAGE.

// Replace a word
let replacedText = upperCaseText.replace("GREAT", "POWERFUL");
console.log("Replaced text:", replacedText);  // Output: JAVASCRIPT IS A POWERFUL PROGRAMMING LANGUAGE.

// Split into words
let words = replacedText.split(" ");
console.log("Words array:", words);  
// Output: ["JAVASCRIPT", "IS", "A", "POWERFUL", "PROGRAMMING", "LANGUAGE."]
```


