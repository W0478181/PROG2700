# Python Data Types Tutorial

# Integer (int)
# Whole numbers without a decimal point
age = 25
print("Age:", age)

# Float (float)
# Numbers with a decimal point
height = 5.9
print("Height:", height)
print(f"Height: {height}")

# String (str)
# Sequence of characters enclosed in quotes
name = "Alice"
print("Name:", name)

# Boolean (bool)
# Represents True or False values
is_student = True
print(f"Is student: {is_student}")

# List
# Ordered collection of items, can be of mixed data types
# Lists are used to store multiple items in a single variable.
# List items are ordered, changeable, and allow duplicate values.
# List items are indexed, the first item has index [0], the second item has index [1] etc.

fruits = ["apple", "banana", "cherry"]
print(f"Fruits: {fruits}")

for fruit in fruits:
    print(f"Fruit: {fruit}")

#Tuple
# Ordered collection of items, immutable (cannot be changed)
# Tuples are used to store multiple items in a single variable.
# Tuple items are ordered, unchangeable, and allow duplicate values.
# Tuple items are indexed, the first item has index [0], the second item has index [1] etc.

coordinates = (10.0, 20.0)
print(f"Coordinates: {coordinates}")
for c in coordinates:
    print(c)

# Set items are unordered, unchangeable, and do not allow duplicate values.
# Example Use Cases:
# Removing duplicates: Quickly filter out duplicate items from a list.
# Original list with duplicates
numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7]

# Convert the list to a set to remove duplicates
unique_numbers = list(set(numbers))

# Print the list without duplicates
print("Original list:", numbers)
print("List without duplicates:", unique_numbers)

# Mathematical set operations:
set_a = {1, 2, 3}
set_b = {3, 4, 5}
print(set_a & set_b)  # Intersection: {3}

# Dictionary (dict)
# A dictionary in Python is an unordered collection of key-value pairs.
# In JavaScript, objects serve a similar purpose to dictionaries in Python, storing key-value pairs.

person = {
    "name": "Bob",
    "age": 30,
    "is_student": True
}

# Accessing Data

# Notes
# 'is' if person['is_student'] else 'is not' 
#The ternary operator in Python allows for a concise way to perform conditional assignments. 
# It evaluates a condition and returns one of two values based on whether the condition is true or false.
print(f"{person['name']} is {person['age']} and {'is' if person['is_student'] else 'is not'} a student")

# Adding and updating Data
person = {"name": "Alice", "age": 30}

person.update({"age": 31, "gender": "Female"})
print(person)  # Output: {'name': 'Alice', 'age': 31, 'gender': 'Female'}

# Removing Data
person = {"name": "Alice", "age": 30}
age = person.pop("age")
print(age)  # Output: 30
print(person)  # Output: {'name': 'Alice'}

# Clear all items in dictionary
person = {"name": "Alice", "age": 30}
person.clear()
print(person)  # Output: {}

# NoneType
# Represents the absence of a value
nothing = None
print("Nothing:", nothing)

