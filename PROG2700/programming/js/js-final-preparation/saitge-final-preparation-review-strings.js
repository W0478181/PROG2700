// Question 1
console.log("split Example:");
// Build the string
let sentence = "john.doe@domain.ca";

// Splitting the string by '@'
let firstpart = sentence.split("@")[0];
console.log(`First part: ${firstpart}`);

// Splitting the local part by '.'
let fname = firstpart.split(".")[0];
console.log(`First name: ${fname}`);

let lname = firstpart.split(".")[1];
console.log(`Last name: ${lname}`);

// Capitalizing the first letter of each name
let upperFirstName = fname.charAt(0).toUpperCase() + fname.slice(1);
let upperLastName = lname.charAt(0).toUpperCase() + lname.slice(1);

console.log(`Capitalized Name: ${upperFirstName} ${upperLastName}`);
console.log("slice Example:");

let decimal = 128;
let binary = '';
while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
}
console.log(binary)
