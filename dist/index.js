"use strict";
function knightMoves(start, end) {
    const directions = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
    const isValid = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;
    const visited = new Set();
    const queue = [[start, [start]]];
    while (queue.length > 0) {
        const [current, path] = queue.shift();
        const key = current.toString();
        if (key === end.toString()) {
            console.log(`You made it in ${path.length - 1} moves!  Here's your path:`);
            path.forEach(pos => console.log(`    [${pos[0]},${pos[1]}]`));
            return path;
        }
        if (visited.has(key))
            continue;
        visited.add(key);
        for (const [dx, dy] of directions) {
            const next = [current[0] + dx, current[1] + dy];
            if (isValid(next)) {
                queue.push([next, [...path, next]]);
            }
        }
    }
    return [];
}
// Example call
knightMoves([3, 3], [4, 3]);
