import {DAY8} from "./data.js";

const input = DAY8.trim().split('\n')
    .map(v => v.split("|")[1].trim())
    .flatMap(value => value.split(" "))
    .filter(v => [2, 3, 4, 7].includes(v.length));

console.log(input.length)
