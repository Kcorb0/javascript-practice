"use strict";

// Switch statements can replace multiple if checks

// Example of a switch statement
let guess = 2;

switch (guess) {
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

// Some tasks rewrite switch to if
let browser = "Chrome";

if (browser == "Chrome") {
    alert("You've got the Chromium")
} else if (browser == "Explorer" || browser == "Firefox") {
    alert("This browswer is supported")
} else {
    alert("")
}

// if to switch

// Before
let a = +prompt('a?', ''); // Reminder: + converts to positive integer

if (a === 0) {
  alert( 0 );
}
if (a === 1) {
  alert( 1 );
}

if (a === 2 || a === 3) {
  alert( '2,3' );
}

// After

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(0);
        break;
    case 2:
    case 3:
        alert('2, 3');
        break;
};