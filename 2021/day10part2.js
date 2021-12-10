import {DAY10} from "./data.js";

const input = DAY10.trim().split('\n');

let closers = new Map();
closers.set(')', 1);
closers.set(']', 2);
closers.set('}', 3);
closers.set('>', 4);

let matchers = new Map();
matchers.set('(', ')');
matchers.set('{', '}');
matchers.set('[', ']');
matchers.set('<', '>');

let scores = input.map(line => {
    let line2 = line;
    while (true) {
        let l = line2.replace(/\[]|{}|<>|\(\)/, '');
        if (l.length === line2.length) {
            return l;
        }
        line2 = l;
    }
})
    .map(line => {
        for (let i = 0; i < line.length; i++) {
            if (closers.has(line[i])) {
                return '';
            }
        }
        return line;
    })
    .filter(line => line !== '')
    .map(line => {
        return [...line].map(token => closers.get(matchers.get(token)))
            .reverse()
            .reduce((prev, curr) => prev * 5 + curr, 0)
    }).sort((a, b) => b - a)

console.log(scores[Math.floor(scores.length / 2)]);
