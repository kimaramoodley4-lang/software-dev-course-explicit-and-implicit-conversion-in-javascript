/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// --- Bug 1: Subtraction with Strings ---
// Fix: Use Number() to explicitly convert the string "5" before subtracting.
let result = Number("5") - 2; 
console.log("The result is: " + result); 

// --- Bug 2: The Boolean String Trap ---
// Fix: Use the literal boolean 'false'. Boolean("false") is true because it's a non-empty string.
let isValid = false; 
if (isValid) {
   console.log("This is valid!");
}

// --- Bug 3: String Concatenation vs Addition ---
// Fix: Convert the 'age' string to a Number so the + operator adds instead of joins.
let age = "25";
let totalAge = Number(age) + 5; 
console.log("Total Age: " + totalAge);


// Example of Implicit Type Conversion
// JavaScript automatically converts the string to a number for multiplication.
let implicitConversion = "10" * 3;
console.log("Implicit Result (10 * 3): " + implicitConversion);

// Example of Explicit Type Conversion with an Edge Case (null)
// Manually changing 'null' to a String to see how JavaScript handles it.
let mysteryValue = null;
let explicitConversion = String(mysteryValue);

console.log("Before conversion type: " + typeof mysteryValue); // object (null)
console.log("After conversion type: " + typeof explicitConversion); // string
console.log("The string value is now: " + explicitConversion); // "null"

