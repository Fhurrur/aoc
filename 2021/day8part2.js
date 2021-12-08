import {DAY8} from "./data.js";

const input = DAY8.trim().split('\n')
    .map(v => {
        let strings = v.split("|");
        return {
            in: strings[0].trim(), out: strings[1].trim()
        }
    })

let sum = input.map(row => {
    const nums = row.in.split(" ")
        .sort((a, b) => a.length - b.length)
        .map(v => [...v]);
    // 0 => 1
    // 1 => 7
    // 2 => 4
    // 3..5 => 2,3,5
    // 6..8 => 0,6,9
    // 9 => 8

    let one = nums[0];
    let seven = nums[1];
    let four = nums[2];
    let eight = nums[9];
    let nine = nums.slice(6, 9).filter(digit => four.every(letter => digit.includes(letter)))[0];
    let six = nums.slice(6, 9).filter(digit => !one.every(letter => digit.includes(letter)))[0];
    let zero = nums.slice(6, 9).filter(digit => digit !== six && digit !== nine)[0]

    let three = nums.slice(3, 6).filter(digit => one.every(letter => digit.includes(letter)))[0];
    let five = nums.slice(3, 6).filter(digit => digit.every(letter => six.includes(letter)))[0];
    let two = nums.slice(3, 6).filter(digit => digit !== three && digit !== five)[0];

    let b = [zero, one, two, three, four, five, six, seven, eight, nine];

    return row.out.split(" ").map(value => {
        let v = [...value];
        for (let i = 0; i < b.length; i++) {
            if (v.length === b[i].length && v.every(letter => b[i].includes(letter))) {
                return i;
            }
        }
    })
})
    .map(value => value.reduce((prev, curr) => prev + curr, ""))
    .reduce((prev, curr) => prev + parseInt(curr), 0);

console.log(sum)
