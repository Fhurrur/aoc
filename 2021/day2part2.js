import {DAY2} from "./data.js";

const input = DAY2.trim().split('\n').map(line => line.split(" "));
let depth = 0;
let pos = 0;
let aim = 0;
input.forEach((value) => {
    let x = Number(value[1]);
    if (value[0] == 'forward') {
        pos += x;
        depth +=x*aim;
    } else if (value[0] == 'up') {
        aim -= x
    } else {
        aim += x;
    }
})
console.log(depth*pos);
