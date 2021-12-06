import {DAY6} from "./data.js";

const input = DAY6.trim().split(',')
    .map(v => parseInt(v));

let days = new Array(9).fill(0);
input.forEach(v => days[v]++)

function iterateDay() {
    let nextDay = [];
    for (let i = 1; i < days.length; i++) {
        nextDay[i - 1] = days[i];
    }
    nextDay[8] = days[0];
    nextDay[6] += days[0];
    days = nextDay;
}

for (let i = 0; i < 256; i++) {
    iterateDay()
}

console.log(days.reduce((prev, curr) => prev + curr, 0));
