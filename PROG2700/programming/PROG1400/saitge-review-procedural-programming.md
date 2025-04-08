### **1-Hour Course Plan: Review of Procedural Programming Fundamentals in Python**

#### **Learning Objectives**
1. Understand and implement control structures (`if/else`, `for`, `while`) in Python.
2. Define, call, and return values from functions.
3. Create and use Python modules for modular programming.
4. Explore the role of variables, data types, and scope in Python.

---

### **Course Outline**

#### **Time Allocation**: 1 Hour

| **Section**                        | **Time**  | **Topics Covered**                                                  | **Activity**                                                                                         |
|------------------------------------|-----------|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| **Introduction**                   | 5 minutes | Overview of procedural programming fundamentals.                     | Brief discussion on procedural programming concepts and their role in software development.         |
| **Control Structures**             | 10 minutes | `if/else`, `for`, `while` loops.                                     | **In-Class Activity**: Write a program to check if a number is prime using a loop and `if/else`.    |
| **Functions**                      | 15 minutes | Defining, calling, and returning values in functions.                | **In-Class Activity**: Create a function to calculate the factorial of a number using a `for` loop. |
| **Variables, Data Types, and Scope**| 10 minutes | Working with different data types, and understanding variable scope. | **In-Class Activity**: Write a program with global and local variables, demonstrating scope.         |
| **Modular Programming**            | 15 minutes | Creating and importing Python modules.                               | **In-Class Activity**: Split the factorial function into a separate module and import it.           |
| **Conclusion and Recap**           | 5 minutes  | Summary of topics and key takeaways.                                 | Open Q&A session to clarify doubts.                                                                 |

---

### **Detailed Lesson Plan**

#### **Introduction (5 minutes)**
- Briefly explain what procedural programming is and its importance.
- Introduce the topics to be covered and their relevance.

---

#### **Control Structures (10 minutes)**
- Explain the use of control structures (`if/else`, `for`, `while`) with examples.
- Demonstrate a quick example:
    ```python
    num = 15
    if num % 2 == 0:
        print(f"{num} is even.")
    else:
        print(f"{num} is odd.")
    ```
- **Activity**: Students will write a program to check if a number is prime:
    ```python
    num = int(input("Enter a number: "))
    is_prime = True
    for i in range(2, num):
        if num % i == 0:
            is_prime = False
            break
    if is_prime:
        print(f"{num} is a prime number.")
    else:
        print(f"{num} is not a prime number.")
    ```

---

#### **Functions (15 minutes)**
- Explain function definition, calling, and returning values with examples:
    ```python
    def greet(name):
        return f"Hello, {name}!"
    print(greet("Alice"))
    ```
- **Activity**: Students will create a function to calculate the factorial of a number:
    ```python
    def factorial(n):
        result = 1
        for i in range(1, n + 1):
            result *= i
        return result
    print(factorial(5))
    ```

---

#### **Variables, Data Types, and Scope (10 minutes)**
- Discuss Python data types (int, str, list, etc.) and variable scope (local vs global):
    ```python
    x = 10  # Global variable

    def test_scope():
        x = 5  # Local variable
        print("Inside function:", x)

    test_scope()
    print("Outside function:", x)
    ```
- **Activity**: Write a program to demonstrate global and local variables.

---

#### **Modular Programming (15 minutes)**
- Explain how to create and import Python modules.  
- Demonstrate splitting the `factorial` function into a module:
    - **factorial_module.py**:
        ```python
        def factorial(n):
            result = 1
            for i in range(1, n + 1):
                result *= i
            return result
        ```
    - **main.py**:
        ```python
        from factorial_module import factorial
        print(factorial(5))
        ```
- **Activity**: Students will create a module for their prime-checking or factorial function and import it into another program.

---

#### **Conclusion and Recap (5 minutes)**
- Recap the key concepts covered:
  - Control structures (`if/else`, `for`, `while`)
  - Functions (defining, calling, returning values)
  - Variables (data types and scope)
  - Modular programming (creating and importing modules)
- Open floor for questions and address any doubts.

---

### **Expected Outcome**
By the end of this session, students will:
- Be comfortable with procedural programming concepts in Python.
- Understand control structures, functions, variable scope, and modular programming.
- Apply these concepts to write simple programs and structure them efficiently.