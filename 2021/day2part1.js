import {DAY2} from "./data.js";

const input = DAY2.trim().split('\n').map(line => line.split(" "));
let depth = 0;
let pos = 0;
input.forEach((value) => {
    let x = Number(value[1]);
    if (value[0] == 'forward') {
        pos += x;
    } else if (value[0] == 'up') {
        depth -= x
    } else {
        depth += x;
    }
})
console.log(depth*pos);
