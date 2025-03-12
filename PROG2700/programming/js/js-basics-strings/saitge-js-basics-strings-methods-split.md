### `split` Method for Strings
The `split` method in JavaScript is used to divide a string into an array of substrings based on a specified separator.

#### Syntax
```javascript
string.split(separator, limit)
```

#### Parameters
- **separator** (optional): A string or regular expression that specifies where to split the string. If omitted, the entire string is returned as a single-element array.
- **limit** (optional): A non-negative integer that limits the number of splits.

#### Examples
1. **Basic Usage**:
   ```javascript
   let text = "How are you doing today?";
   let words = text.split(" ");
   console.log(words); // ["How", "are", "you", "doing", "today?"]
   ```

2. **Using a Limit**:
   ```javascript
   let text = "How are you doing today?";
   let words = text.split(" ", 3);
   console.log(words); // ["How", "are", "you"]
   ```

3. **Splitting by Characters**:
   ```javascript
   let text = "Hello";
   let chars = text.split("");
   console.log(chars); // ["H", "e", "l", "l", "o"]
   ```

4. **Using a Regular Expression**:
   ```javascript
   let text = "apple, banana, cherry";
   let fruits = text.split(/,\s*/);
   console.log(fruits); // ["apple", "banana", "cherry"]
   ```

### Splitting Arrays
While the `split` method is specific to strings, you can split arrays using methods like `slice` or custom logic.

#### Using `slice` Method
The `slice` method can be used to create subarrays from an existing array.

#### Syntax
```javascript
array.slice(start, end)
```

#### Parameters
- **start**: The index at which to begin extraction.
- **end** (optional): The index before which to end extraction. If omitted, extracts through the end of the array.

#### Examples
1. **Splitting an Array in Half**:
   ```javascript
   let arr = [1, 2, 3, 4, 5, 6];
   let firstHalf = arr.slice(0, Math.ceil(arr.length / 2));
   let secondHalf = arr.slice(Math.ceil(arr.length / 2));
   console.log(firstHalf); // [1, 2, 3]
   console.log(secondHalf); // [4, 5, 6]
   ```

2. **Splitting an Array into Chunks**:
   ```javascript
   function splitArrayIntoChunks(arr, chunkSize) {
       let result = [];
       for (let i = 0; i < arr.length; i += chunkSize) {
           result.push(arr.slice(i, i + chunkSize));
       }
       return result;
   }

   let arr = [1, 2, 3, 4, 5, 6, 7, 8];
   let chunks = splitArrayIntoChunks(arr, 3);
   console.log(chunks); // [[1, 2, 3], [4, 5, 6], [7, 8]]
   ```

### Summary
- The `split` method is used for strings to divide them into an array of substrings.
- Arrays can be split using methods like `slice` to create subarrays.
