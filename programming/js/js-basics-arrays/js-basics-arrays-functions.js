
function addIteminCart(product, quantity, price, category) {
    // need to find the item in the cart to be updated.
  for (let i=0; i < cart.length; i++) {
    if (cart[i][0] === product) {
        cart[i][1] += quantity;
        cart[i][2] += price;
        cart[i][3] = category;
        return [true, product];
        };
       }
        // Add the item to the cart
        cart.push([product, quantity, price, category]) 
        return [false, product];
}

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
function deleteIteminCart(product) {
    // We need to find the item in the cart to be updated
       for (let i=0; i < cart.length; i++) {
           if (cart[i][0] === product) {
               cart.splice([i]);
               return true;
           }
       }
       // console.log(`Item ${product} does not exist.`)
       return false;  // No match
}

// Main Program Execution 
let cart = [
    ["Smartphone", 1, 699, "electronics"],
    ["Jeans", 2, 49, "clothing"],
    ["Apple", 5, 0.5, "groceries"],
    ["Computer", 1, 1000, "electronics"],
    ["Air Fryer", 1, 180, "appliances"],
];

let result = addIteminCart("Headphones",1,99,"electronics");
if (result[0]) {
    console.log(`The item ${result[1]} has been updated.`);
} else {
    console.log(`The item ${result[1]} has been added to the cart.`)
}

let result1 = addIteminCart("Headphones",1,99,"electronics");
if (addIteminCart("Headphones",1,99,"electronics") == true) {
    
    console.log(`The item ${result1[1]} has been updated.`)
} else {
    console.log(`The item ${result1[1]} has been added to the cart.`)
}

if (addIteminCart("Headphones",1,99,"electronics") == true) {
    
    console.log(`The item ${result1[1]} has been updated.`)
} else {
    console.log(`The item ${result1[1]} has been added to the cart.`)
}

displayCart();
let result3 = deleteIteminCart("Headphones");
displayCart();

