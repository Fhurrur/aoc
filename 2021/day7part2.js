import {DAY7} from "./data.js";

const input = DAY7.trim().split(',')
    .map(v => parseInt(v));

const max = input.reduce((prev, curr) => Math.max(prev, curr), 0);

let cost = [...Array(max).keys()]
    .map(i => input.map(v => {
        return Math.abs(v - i) * (Math.abs(v - i) + 1) / 2
    }).reduce((prev, curr) => prev + curr, 0))
    .reduce((prev, curr) => curr < prev ? curr : prev, Number.MAX_SAFE_INTEGER);
console.log(cost);
