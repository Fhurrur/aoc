import {DAY11} from "./data.js";

const board = DAY11.trim().split('\n')
    .map(line => [...line].map(v => ({flashed: false, value: parseInt(v)})));

let totalFlashes = 0;

const SIZE = 10;
for (let step = 0; step < 100; step++) {
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            board[i][j].value++;
        }
    }

    let changed = true;
    while (changed) {
        changed = false;
        for (let i = 0; i < SIZE; i++) {
            for (let j = 0; j < SIZE; j++) {
                let element = board[i][j];
                if (element.value >= 10 && !element.flashed) {
                    changed = true;
                    element.flashed = true;
                    inc(board, i, j);
                }
            }
        }
    }

    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            let element = board[i][j];
            if (element.value >= 10) {
                totalFlashes++;
                element.value = 0;
            }
            element.flashed = false;
        }
    }
}

console.log(totalFlashes);

function inc(board, i, j) {
    for (let k = Math.max(0, i - 1); k <= Math.min(SIZE - 1, i + 1); k++) {
        for (let l = Math.max(0, j - 1); l <= Math.min(SIZE - 1, j + 1); l++) {
            board[k][l].value++;
        }
    }
}
