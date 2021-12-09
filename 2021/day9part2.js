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

let basins = lowpoints.map(point => {
    let floor = [...new Array(input.length)].map(() => new Array(input[0].length).fill(false));
    return ({
        ...point,
        basin: search(point, floor)
    });
})
    .sort((a, b) => b.basin - a.basin)
    .slice(0, 3)
    .reduce((prev, curr) => prev * curr.basin, 1)

console.log(basins);

function search(point, searchMap) {
    let {x, y} = point
    let outofbounds = y < 0 || y === input.length || x < 0 || x === input[0].length;
    if (outofbounds || searchMap[x][y] === true) {
        return 0;
    }

    searchMap[x][y] = true;
    if (input[y][x] === 9) {
        return 0;
    }

    return 1 +
        search({y: point.y - 1, x: point.x}, searchMap) +
        search({y: point.y + 1, x: point.x}, searchMap) +
        search({y: point.y, x: point.x - 1}, searchMap) +
        search({y: point.y, x: point.x + 1}, searchMap)
}
