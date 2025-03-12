// Working with Arrays
// Each item is represented as an array in the format:
// [name, quantity, price, category]
let cart = [
    ["Smartphone", 1, 699, "electronics"],
    ["Jeans", 2, 49, "clothing"],
    ["Apple", 5, 0.5, "groceries"],
    ["Computer", 1, 1000, "electronics"],
    ["Air Fryer", 1, 180, "appliances"],
  ];
  
// READ OPERATIONS
  // Print the Contents of the Array
  console.log(cart);
  // Notice that the output is not very useful
  // let Build some code to view the contents rather than the array

  // Display the contents of the Cart (User Friendly)
  // Loop through the cart

for (i=0; i < cart.length; i++) {
  let item = cart[i];
  // console.log(`Product: ${item[0]}, Quantity: ${item[1]}, Price: ${item[2]}, Category: ${item[3]}`);
  // The output is not very user friendly
  // Use a Multi-Line Strings Approach to format the output for the user
  console.log(`
    Product: ${item[0]}
    Quantity: ${item[1]}
    Price: ${item[2]}
    Category: ${item[3]}`);
}

// CREATE A RECORD IN THE ARRAY
// Define the new item
let newItem = ["Headphones", 1, 199, "electronics"]

// Add the new item to the cart
cart.push(newItem)

// Display the Cart
for (i=0; i < cart.length; i++) {
  let item = cart[i];
  // console.log(`Product: ${item[0]}, Quantity: ${item[1]}, Price: ${item[2]}, Category: ${item[3]}`);
  // The output is not very user friendly
  // Use a Multi-Line Strings Approach to format the output for the user
  console.log(`
    Product: ${item[0]}
    Quantity: ${item[1]}
    Price: ${item[2]}
    Category: ${item[3]}`);
}

// Notice we are duplicating code to iterate through the Array
// We need to use functions to reducing code (easier to manage and troubleshoot)
function displayCart(){
   // Display the Cart
  for (i=0; i < cart.length; i++) {
    let item = cart[i];
    // console.log(`Product: ${item[0]}, Quantity: ${item[1]}, Price: ${item[2]}, Category: ${item[3]}`);
    // The output is not very user friendly
    // Use a Multi-Line Strings Approach to format the output for the user
    console.log(`
      Product: ${item[0]}
      Quantity: ${item[1]}
      Price: ${item[2]}
      Category: ${item[3]}`);
  }
}

// Call the function
displayCart();

// 

  
  
  
  
  
  