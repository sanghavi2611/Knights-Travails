type Position = [number, number];

function knightMoves(start: Position, end: Position): Position[] {
  const directions: Position[] = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];

  const isValid = ([x, y]: Position): boolean =>
    x >= 0 && x < 8 && y >= 0 && y < 8;

  const visited = new Set<string>();
  const queue: [Position, Position[]][] = [[start, [start]]];

  while (queue.length > 0) {
    const [current, path] = queue.shift()!;
    const key = current.toString();

    if (key === end.toString()) {
      console.log(`You made it in ${path.length - 1} moves!  Here's your path:`);
      path.forEach(pos => console.log(`    [${pos[0]},${pos[1]}]`));
      return path;
    }

    if (visited.has(key)) continue;
    visited.add(key);

    for (const [dx, dy] of directions) {
      const next: Position = [current[0] + dx, current[1] + dy];
      if (isValid(next)) {
        queue.push([next, [...path, next]]);
      }
    }
  }

  return [];
}

// Example call
knightMoves([3, 3], [4, 3]);
