import {DAY3} from "./data.js";

const input = DAY3.trim().split('\n').map(line => [...line].map(v => Number(v)));
let g;
let e;
let commonBits = [];
input[0].forEach((v, i) => commonBits[i] = 0);
input.forEach((value) => {
    for (let i = 0; i < value.length; i++) {
        if (value[i] == 1) {
            commonBits[i] += 1;
        }
    }
})
g = commonBits.map(v => v > input.length / 2 ? 1 : 0).reduce((prev, curr) => String(prev) + String(curr), "")
e = commonBits.map(v => v < input.length / 2 ? 1 : 0).reduce((prev, curr) => String(prev) + String(curr), "")
console.log(Number.parseInt(g, 2) * Number.parseInt(e, 2));
