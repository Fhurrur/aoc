import {DAY3} from "./data.js";

const input = DAY3.trim().split('\n').map(line => [...line].map(v=>Number(v)));

function doFilter(arr, pos, commonMode) {
    if (arr.length == 1) {
        return arr[0];
    }
    let onesInPos = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][pos] == 1) {
            onesInPos++;
        }
    }
    let mostCommon;
    if (commonMode) {
        mostCommon = onesInPos >= arr.length / 2 ? 1 : 0;
    } else {
        mostCommon = onesInPos >= arr.length / 2 ? 0 : 1;
    }
    return doFilter(arr.filter(v => v[pos] == mostCommon), pos + 1, commonMode)
}

let oxyval = doFilter(input, 0, true).reduce((prev, curr) => String(prev) + String(curr), "")
let scrubval = doFilter(input, 0, false).reduce((prev, curr) => String(prev) + String(curr), "")
console.log(Number.parseInt(oxyval, 2) * Number.parseInt(scrubval, 2));
