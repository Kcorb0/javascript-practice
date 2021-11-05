"use strict";

// Alert waits for user to click ok
alert("yo")

// A prompt gets a user input
let answer;
answer = prompt("What is the meaning of life?");
alert(`The meaning of life: ${answer}`);

// Confirm gets a boolean variable back
let confirmation;
confirmation = confirm("JavaScript is dank")

if (confirmation == true) {
    alert("Yup, dankest scripting language around :)")
} else {
    alert("guess JavaScript is not so dank :(")
}

let user_name;
user_name = prompt("User tell me your name")
alert(`So your name is ${user_name}`)