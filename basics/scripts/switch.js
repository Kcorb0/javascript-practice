"use strict";

// Switch statements can replace multiple if checks

// Example of a switch statement
let card = 2;

switch (card) {
    case 2:
        alert('Under');
        break;
    case 5:
        alert('Under');
        break;
    case 8:
        alert('Hit');
        break;
    case 10:
        alert('Over');
        break;
    default:
        alert('Is this actually a number?');
        break;
};