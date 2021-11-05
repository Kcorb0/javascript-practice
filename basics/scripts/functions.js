"use strict";

// Example of a function in JS
function showMessage(message) {
    message = message || "No message."
    alert(message);
};


function squareNumber() {
    let number = +prompt("Enter number to square");

    return (number*number);
};


function showBiggerNum(a, b) {
    return (a > b) ? a : b;
};


function pow(x, n) {

    if (x > 0 && n > 0) {
        return x ** n;
    };

    return "That aint no natural numba";
};


alert(pow(3, 24));