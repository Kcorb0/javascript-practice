"use strict";

let n = 100;
let i = 2

nextprime: for (; i <= n; i += 1) {

    for (let x = 2; x < 12; x++) {
        if (i % x == 0) continue nextprime;
    }

    alert(i)
}