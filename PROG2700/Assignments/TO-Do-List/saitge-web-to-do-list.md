### **Tutorial: Getting Started with DOM Manipulation – Building a Dynamic To-Do List**  

**Objective:**  
This tutorial will introduce students to **DOM manipulation** using JavaScript by guiding them through the process of building a simple **To-Do List**. By the end, students will understand how to:  
✅ Add tasks dynamically to a list  
✅ Edit tasks  
✅ Mark tasks as complete  
✅ Delete tasks  
✅ Use localStorage to save tasks  

---

## **Step 1: Setting Up the HTML Structure**  

The first step is to create a basic **HTML file**. This file will include an input box for entering tasks, a button to add tasks, and an area to display the list of tasks.  

### **1.1 Create an HTML File (`index.html`)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>To-Do List</h1>
    <div id="task-container">
        <input type="text" id="task-input" placeholder="Enter a new task">
        <button id="add-task">Add Task</button>
    </div>
    <ul id="task-list"></ul>

    <script src="script.js"></script>
</body>
</html>
```
### **Explanation:**
- The `<input>` field allows users to enter new tasks.  
- The **"Add Task"** button will add the task to the list when clicked.  
- The `<ul>` element will hold the list of tasks dynamically.  
- A **CSS file** (`styles.css`) will be used to style the to-do list.  
- A **JavaScript file** (`script.js`) will be used for logic and DOM manipulation.  

---

## **Step 2: Adding Basic Styling**  

Now, let’s make the page visually appealing using CSS.  

### **2.1 Create a CSS File (`styles.css`)**
```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 20px;
}

#task-container {
    margin-bottom: 20px;
}

input {
    padding: 5px;
    width: 250px;
}

button {
    padding: 5px 10px;
    margin-left: 5px;
    cursor: pointer;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f4f4f4;
    margin: 5px auto;
    padding: 10px;
    width: 300px;
    border-radius: 5px;
}

.completed {
    text-decoration: line-through;
    color: gray;
}
```
### **Explanation:**
- The **body** is centered and given a clean layout.  
- The **task list** (`ul`) is styled to remove bullets and look neat.  
- Each **task item** (`li`) is spaced out and styled with a light background.  
- The **completed class** makes finished tasks appear grayed out with a strikethrough effect.  

---

## **Step 3: Adding Tasks with JavaScript**  

Now, let’s write JavaScript to make the **"Add Task"** button work.  

### **3.1 Create a JavaScript File (`script.js`)**
```js
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    addTaskButton.addEventListener("click", function () {
        if (taskInput.value.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }
        createTaskElement(taskInput.value);
        taskInput.value = "";
    });

    function createTaskElement(taskText) {
        const li = document.createElement("li");

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            li.classList.toggle("completed", checkbox.checked);
        });

        // Task Text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // Edit Button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function () {
            const newText = prompt("Edit your task:", taskSpan.textContent);
            if (newText !== null && newText.trim() !== "") {
                taskSpan.textContent = newText;
            }
        });

        // Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});
```
### **Explanation:**
- **`createTaskElement(taskText)`**  
  - Dynamically creates a new task item (`li`) with a **checkbox**, **edit button**, and **delete button**.  
- **Checkbox toggles the completed state** by adding a class.  
- **Edit button allows users to modify tasks using `prompt()`.**  
- **Delete button removes the task from the list.**  

---

## **Step 4: Storing Tasks in Local Storage (Bonus Feature)**
This step ensures that tasks are **saved** even if the page is refreshed.

### **4.1 Modify `script.js` to Use localStorage**
```js
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    // Load saved tasks from localStorage
    loadTasks();

    addTaskButton.addEventListener("click", function () {
        if (taskInput.value.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }
        createTaskElement(taskInput.value);
        saveTasks();
        taskInput.value = "";
    });

    function createTaskElement(taskText, isCompleted = false) {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = isCompleted;
        if (isCompleted) li.classList.add("completed");
        checkbox.addEventListener("change", function () {
            li.classList.toggle("completed", checkbox.checked);
            saveTasks();
        });

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function () {
            const newText = prompt("Edit your task:", taskSpan.textContent);
            if (newText !== null && newText.trim() !== "") {
                taskSpan.textContent = newText;
                saveTasks();
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            li.remove();
            saveTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll("#task-list li").forEach((li) => {
            const text = li.querySelector("span").textContent;
            const completed = li.classList.contains("completed");
            tasks.push({ text, completed });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks.forEach((task) => createTaskElement(task.text, task.completed));
    }
});
```
### **Explanation:**
- **Saves tasks in `localStorage` when added, edited, completed, or deleted.**  
- **Loads saved tasks from `localStorage` on page reload.**  

---

### ✅ **Congratulations!**  
You now have a working **to-do list** with full DOM manipulation, event handling, and localStorage support. 🎉  

Would you like a **video demo** or **additional challenges**? 🚀