import {DAY9} from "./data.js";

const input = DAY9.trim().split('\n')
    .map(line => [...line].map(digit => parseInt(digit)))

let lowpoints = [];
for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
        let point = input[y][x];
        let up = y === 0 ? 10 : input[y - 1][x];
        let down = y === input.length - 1 ? 10 : input[y + 1][x];
        let left = x === 0 ? 10 : input[y][x - 1];
        let right = x === input[y].length - 1 ? 10 : input[y][x + 1];

        let minAdjacent = Math.min(up, down, left, right)
        if (point < minAdjacent) {
            lowpoints.push({x, y, value: point})
        }
    }
}
console.log(lowpoints.reduce((prev, curr) => 1 + prev + curr.value, 0));
