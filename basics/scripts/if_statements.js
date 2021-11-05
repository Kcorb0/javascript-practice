"use strict";

//simple if statement
let user_input;
user_input = prompt("Do we live in a simulation?");

if (user_input.toLowerCase() == "yes") {
    alert("Terminate the subject.");
} else if (user_input.toLowerCase() == "no"){
    alert("All clear.");
} else {
    alert("Interesting, subject cannot answer a simple yes no question.")
}

// Simple if else using the conditional operator (?)
let result = (5>6) ? "aaa true true" : "wtf?";
alert(result);
