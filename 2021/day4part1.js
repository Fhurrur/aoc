import {DAY4} from "./data.js";

const input = DAY4.trim().split('\n\n');
const draws = input[0].split(",").map(v => Number(v));
const boards = input.slice(1)
    .map(line => line.split(/[\n]+/g))
    .map(boardLine => {
        return boardLine.map(line => line.trim().split(/ +/g).map(x => Number(x)))
    });

let bingo = false;
for (let i = 0; i < draws.length && !bingo; i++) {
    for (let j = 0; j < boards.length && !bingo; j++) {
        let board = boards[j];
        for (let k = 0; k < 5; k++) {
            let boardRow = board[k];
            for (let l = 0; l < 5; l++) {
                if (boardRow[l] === draws[i]) {
                    boardRow[l] = null;
                }
            }
        }
        if (boardBingo(board)) {
            console.log(sumBoard(board) * draws[i]);
            bingo = true;
        }
    }
}

function boardBingo(board) {
    return check(board, (i, j) => board[i][j]) || check(board, (i, j) => board[j][i])
}

function check(board, valget) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (valget(i, j) !== null) {
                break;
            }
            if (j == 4 && valget(i, j) === null) {
                return true;
            }
        }
    }
    return false;
}

function sumBoard(board) {
    return board.flatMap(value => value).reduce((prev, curr) => prev + curr, 0);
}
