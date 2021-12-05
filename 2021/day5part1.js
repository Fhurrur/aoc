import {DAY5} from "./data.js";

const input = DAY5.trim().split('\n')
    .map(v => {
        let match = v.match(/(\d+),(\d+) -> (\d+),(\d+)/);
        let x1 = parseInt(match[1]);
        let y1 = parseInt(match[2]);
        let x2 = parseInt(match[3]);
        let y2 = parseInt(match[4]);
        return {x1: Math.min(x1, x2), y1: Math.min(y1, y2), x2: Math.max(x1, x2), y2: Math.max(y1, y2)};
    })
    .filter(v => v.x1 === v.x2 || v.y1 === v.y2)

let maxX = input.reduce((prev, curr) => Math.max(prev, curr.x2), 0) + 1
let maxY = input.reduce((prev, curr) => Math.max(prev, curr.y2), 0) + 1

let ground = [...new Array(maxX)].map(() => new Array(maxY).fill(0));
input.forEach(vent => {
    for (let i = vent.x1; i <= vent.x2; i++) {
        for (let j = vent.y1; j <= vent.y2; j++) {
            ground[i][j] += 1;
        }
    }
})
console.log(ground.flatMap(value => value)
    .filter(v => v >= 2)
    .length);

