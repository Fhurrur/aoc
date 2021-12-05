import {DAY5} from "./data.js";

const input = DAY5.trim().split('\n')
    .map(v => {
        let match = v.match(/(\d+),(\d+) -> (\d+),(\d+)/);
        return {x1: parseInt(match[1]), y1: parseInt(match[2]), x2: parseInt(match[3]), y2: parseInt(match[4])};
    })

let maxX = input.reduce((prev, curr) => Math.max(prev, curr.x1, curr.x2), 0) + 1
let maxY = input.reduce((prev, curr) => Math.max(prev, curr.y1, curr.y2), 0) + 1

let ground = [...new Array(maxY)].map(() => new Array(maxX).fill(0));
input.forEach(vent => {
    if (vent.x1 == vent.x2 || vent.y1 == vent.y2) {
        vent = {
            x1: Math.min(vent.x1, vent.x2),
            x2: Math.max(vent.x1, vent.x2),
            y1: Math.min(vent.y1, vent.y2),
            y2: Math.max(vent.y1, vent.y2)
        }
        for (let i = vent.x1; i <= vent.x2; i++) {
            for (let j = vent.y1; j <= vent.y2; j++) {
                ground[j][i] += 1;
            }
        }
    } else {
        for (let i = 0; i <= Math.abs(vent.x2 - vent.x1); i++) {
            ground[(vent.y1 < vent.y2) ? (vent.y1 + i) : (vent.y1 - i)][(vent.x1 < vent.x2) ? (vent.x1 + i) : (vent.x1 - i)] += 1;
        }
    }
})
console.log(ground.flatMap(value => value)
    .filter(v => v >= 2)
    .length);

