### Independent Lab: Traversing the DOM

**Objective:** 
Students will independently learn how to traverse and manipulate the DOM by completing a series of guided steps.

**Materials Needed:**
- Computer with internet access
- A simple HTML file (provided below)

**Instructions:**

#### Step 1: Introduction to the DOM
- **Explanation:** The DOM (Document Object Model) represents the structure of a webpage. It allows you to access and manipulate HTML elements using JavaScript.
- **Key Methods:** Familiarize yourself with these common DOM traversal methods:
  - `getElementById`
  - `getElementsByClassName`
  - `querySelector`
  - `parentNode`
  - `childNodes`
  - `nextSibling`
  - `previousSibling`

#### Step 2: Setup
- **HTML File:** Use the following simple HTML file for this lab:
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>DOM Traversal Lab</title>
      <style>
          .clue { color: blue; }
          #treasure { padding: 10px; }
      </style>
  </head>
  <body>
      <div id="container">
          <h1>Welcome to the DOM Traversal Lab!</h1>
          <p class="clue">Clue 1: Find the treasure!</p>
          <p class="clue">Clue 2: Look for the hidden message.</p>
          <div id="treasure">You found the treasure!</div>
          <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
          </ul>
      </div>
  </body>
  </html>
  ```
- **Access:** Open the file in your browser and a code editor.

#### Step 3: Task 1 - Find and Modify an Element
- **Objective:** Use `getElementById` to find an element and change its style.
- **Instructions:**
  1. Open the HTML file in your code editor.
  2. Add the following JavaScript code to the bottom of the file, just before the closing `</body>` tag:
     ```html
     <script>
         var treasure = document.getElementById('treasure');
         treasure.style.backgroundColor = 'yellow';
     </script>
     ```
  3. Save the file and refresh the browser to see the change.

#### Step 4: Task 2 - Select and Modify Multiple Elements
- **Objective:** Use `getElementsByClassName` to select multiple elements and change their text content.
- **Instructions:**
  1. Add the following JavaScript code below the previous script:
     ```html
     <script>
         var clues = document.getElementsByClassName('clue');
         for (var i = 0; i < clues.length; i++) {
             clues[i].textContent = 'Clue ' + (i + 1) + ': Updated text!';
         }
     </script>
     ```
  2. Save the file and refresh the browser to see the changes.

#### Step 5: Task 3 - Navigate to Parent Element
- **Objective:** Use `parentNode` to navigate to a parent element and add a border to it.
- **Instructions:**
  1. Add the following JavaScript code below the previous script:
     ```html
     <script>
         var treasureParent = treasure.parentNode;
         treasureParent.style.border = '2px solid red';
     </script>
     ```
  2. Save the file and refresh the browser to see the changes.

#### Step 6: Task 4 - Find and Modify Child Elements
- **Objective:** Use `childNodes` to find and modify child elements.
- **Instructions:**
  1. Add the following JavaScript code below the previous script:
     ```html
     <script>
         var container = document.getElementById('container');
         var firstChild = container.childNodes[1]; // Skipping text nodes
         firstChild.style.fontSize = '24px';
     </script>
     ```
  2. Save the file and refresh the browser to see the changes.

#### Step 7: Task 5 - Traverse Siblings
- **Objective:** Use `nextSibling` and `previousSibling` to navigate between sibling elements.
- **Instructions:**
  1. Add the following JavaScript code below the previous script:
     ```html
     <script>
         var firstClue = clues[0];
         var nextElement = firstClue.nextSibling.nextSibling; // Skipping text nodes
         nextElement.style.display = 'none';
     </script>
     ```
  2. Save the file and refresh the browser to see the changes.
