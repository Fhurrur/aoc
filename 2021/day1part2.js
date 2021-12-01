import {DAY1} from "./data.js";

const input = DAY1.trim().split('\n').map(line => Number(line));
let increased = 0;
input.map((value, index, array) => {
  if (index > 1) {
      return array[index-2] + array[index-1] + array[index]
  }
}).forEach((value, index, array) => {
    if (index > 0 && value > array[index-1]) {
        increased++;
    }
})
console.log(increased);
