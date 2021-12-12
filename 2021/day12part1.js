import {DAY12} from "./data.js";

const paths = DAY12.trim().split('\n')
    .map(line => {
        let nodes = line.split("-");
        return {start: nodes[0], end: nodes[1]}
    });
const nodes = {};
paths.forEach(path => {
    if (!nodes[path.start]) {
        nodes[path.start] = {nodes: [], big: path.start.toLowerCase() !== path.start};
    }
    nodes[path.start].nodes.push(path.end);
    if (!nodes[path.end]) {
        nodes[path.end] = {nodes: [], big: path.end.toLowerCase() !== path.end};
    }
    nodes[path.end].nodes.push(path.start);
});

function visit(node, path) {
    let localPath = new Array(...path);
    localPath.push(node);
    if (node === 'end') {
        return [localPath];
    }
    return nodes[node].nodes
        .filter(node => nodes[node].big || !path.includes(node))
        .flatMap(node => {
            return [...visit(node, localPath)];
        })
}

console.log(visit('start', []).length)

