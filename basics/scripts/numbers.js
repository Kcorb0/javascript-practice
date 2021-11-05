"use strict";

let num1;
let num2;

num1 = 2;
num2 = 5;

alert("6" + 3)

// Some basic operators
alert(num1 / num2);
alert(num2 % num1);
alert(num1 * num2)
alert(num1 ** num2)

// Incrementing and Decrementing
let counter = 2;
counter++;
alert(counter); // Becomes 3
counter--;
alert(counter); // Becomes 2 again

alert(counter+=5); // Returns 7

// Here is infinity it's infinite
alert(Infinity);

// You can't multiply strings returns an error if attempted
alert("ha" * 4);

// Alternatively JS has a function to do this
alert("ha".repeat(5));