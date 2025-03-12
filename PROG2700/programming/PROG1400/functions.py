# Functions in Python

# Define a simple function
def greet(name):
    # This function takes one argument 'name' and prints a greeting message
    print(f"Hello, {name}!")

# Call the function with an argument
greet("Alice")  # Output: Hello, Alice!

# Function with multiple arguments
def add_numbers(a, b):
    # This function takes two arguments 'a' and 'b', and returns their sum
    return (a + b)
result = add_numbers(5,3)
print(f"The sum is: {result}")

# Function with default arguments
def greet_with_default(name="Guest"):
    # This function takes one argument 'name' with a default value of "Guest"
    print(f"Hello, {name}!")

# Call the function without an argument
greet_with_default()

# Function with keyword arguments
def describe_person(name, age, city):
    # This function takes three arguments and prints a description
    print(f"{name} is {age} years old and lives in {city}.")

# Call the function with keyword arguments
describe_person(name="Charlie", age=25, city="New York")
# Output: Charlie is 25 years old and lives in New York.

# Function with variable-length arguments (*args)
def print_numbers(*args):
    # This function takes a variable number of arguments and prints them
    for number in args:
        print(number)

# Call the function with multiple arguments
print_numbers(1, 2, 3, 4, 5)
# Output:
# 1
# 2
# 3
# 4
# 5

# Function with variable-length keyword arguments (**kwargs)
def print_person_info(**kwargs):
    # This function takes a variable number of keyword arguments and prints them
    for key, value in kwargs.items():
        print(f"{key}: {value}")

# Call the function with multiple keyword arguments
print_person_info(name="Diana", age=28, city="Los Angeles")
# Output:
# name: Diana
# age: 28
# city: Los Angeles
