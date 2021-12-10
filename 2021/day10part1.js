import {DAY10} from "./data.js";

const input = DAY10.trim().split('\n');

let closers = new Map();
closers.set(')', 3);
closers.set(']', 57);
closers.set('}', 1197);
closers.set('>', 25137);

let map = input.map(line => {
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
                return closers.get(line[i])
            }
        }
        return 0;
    })

console.log(map.reduce((prev, curr) => prev + curr, 0));
