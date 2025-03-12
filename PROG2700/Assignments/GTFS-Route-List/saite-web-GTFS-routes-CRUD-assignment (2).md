### **Assignment: GTFS Route List Application**  
**Course:** Client-Side Development  
**Total Points:** 100  

**Learning Outcomes:**  
1. **Demonstrate a proficient understanding of the JavaScript programming language** in order to develop client-side web apps without the use of frameworks or libraries.  
2. **Demonstrate proficiency in DOM manipulation** to develop client-side applications that meet project requirements.  

---

## **📌 Assignment Overview**  
In this assignment, you will build a **GTFS Route List Application** using only vanilla JavaScript, HTML, and CSS. The app will allow users to:  
✅ Load and display **routes** from a GTFS `routes.txt` file  
✅ Add new routes manually  
✅ Edit and delete route entries dynamically  
✅ Store and retrieve route data using `localStorage`  

This project will help you reinforce **core JavaScript concepts** such as variables, functions, event handling, local storage, and file processing while focusing on **DOM manipulation techniques**.  

---

## **📂 Assignment Requirements**  

### **1. Project Setup**  
Create a new project folder named **GTFS-Route-List**. Inside this folder, include the following files:  
- `index.html` (Main UI with the necessary elements)  
- `styles.css` (CSS styles for a structured layout)  
- `script.js` (JavaScript logic for handling routes)  
- `routes.txt` (A sample GTFS file containing transit route data)  

---

### **2. Application Features**  
Your application must include the following core functionalities:  

#### **A. User Interface (HTML & CSS)**
- A **file input field** that allows users to upload a `routes.txt` file.  
- A **table or list** that displays the route data dynamically.  
- A **form** with input fields for adding new routes manually.  
- **Buttons** for editing and deleting existing routes.  

#### **B. JavaScript Functionality (Without Frameworks or Libraries)**  
- **Read and Process Files:** Implement JavaScript logic to read and parse the `routes.txt` file.  
- **DOM Manipulation:**  
  - Dynamically create and update elements on the page.  
  - Add new routes to the list when the user submits the form.  
  - Enable users to edit existing route names.  
  - Allow users to delete routes from the list.  
- **Event Handling:** Implement event listeners to manage user actions (e.g., clicking buttons, submitting forms, handling file uploads).  
- **Local Storage:** Ensure that route data persists across page refreshes by saving it in `localStorage`.  

#### **C. Code Quality and JavaScript Proficiency**  
- Use **only vanilla JavaScript** (no external libraries or frameworks).  
- Write **clean, well-structured, and properly commented** code.  
- Implement **error handling** (e.g., prevent duplicate route IDs, validate form inputs).  

---

## **📊 Grading Rubric (100 Points Total)**  

| **Criteria**         | **Points** | **Description** |
|----------------------|------------|----------------|
| **JavaScript Proficiency** | 25 | Uses only vanilla JavaScript effectively, demonstrating understanding of core concepts. |
| **DOM Manipulation** | 25 | Routes are dynamically added, edited, and deleted, with proper real-time updates. |
| **HTML Structure**   | 15 | Page includes a table or list, form for adding routes, and a file upload option. |
| **CSS Styling**      | 10 | The interface is visually appealing, organized, and well-formatted. |
| **Event Handling**   | 10 | Correctly implements event listeners for user interactions. |
| **File Processing**  | 10 | Reads `routes.txt` and extracts data accurately. |
| **Local Storage**    | 5  | Data persists after refreshing the page. |
| **Bonus: Sorting (Extra Credit)** | 10 | Routes are displayed in alphabetical order by name. |

---

## **📌 Submission Guidelines**
- Submit a ZIP file containing `index.html`, `styles.css`, `script.js`, and `routes.txt`.  
- Ensure your code runs without errors in a modern browser.  

---

## **🚀 Bonus Challenge**  
🔹 Modify the project to **sort routes alphabetically** when displayed.  
🔹 Implement a **search/filter function** to allow users to find routes by name.  

---

### **🔚 Final Notes**  
This assignment evaluates **your ability to write JavaScript without frameworks** while effectively manipulating the **DOM to create a dynamic web application**. By completing this project, you will gain practical experience working with **real-world GTFS transit data**, reinforcing key JavaScript skills needed for client-side development. 🚍💻  

