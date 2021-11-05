"use strict";

// Basic while loop
let run = true;
let counter = 1;
let endit;

while (run) {
    if (counter < 10) {
        endit = confirm(`Day ${counter}. Please make it stop.`);
    } else {
        endit = confirm(`Day ${counter}. OH GOD PLEASE, I CAN'T TAKE IT.`);
    }

    counter++;

    if (endit == true) {
        run = false;
        alert("Thank you, kind soul.");
    };
}

// Do while
let i = 0;

do {
    alert(i);
    i++;
} while (i < 5);


// For loop example
for (let i = 1; i < 4; i++) {
    alert(i)
}
