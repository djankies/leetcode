/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const m = maze.length;
    const n = maze[0].length;
    
    const validStep = (row, col) => {
        return row >= 0 &&
        row < m &&
        col >= 0 &&
        col < n &&
        maze[row][col] !== '+';
    }

    const seen = [];

    for (let i = 0; i < m; i++) {
        seen.push(new Array(n).fill(false));
    }

    let queue = [entrance];
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let steps = 0;
    
    while(queue.length) {
        const currLen = queue.length;
        let newQueue = [];

        for (let i = 0; i < currLen; i++) {
            const [row, col] = queue[i];
            seen[row][col] = true;
            
            if ((row === m - 1 || col === n - 1 || col === 0 || row === 0) && steps > 0) {
                return steps;
            }

            for (const [dx, dy] of directions) {
                const nextRow = row + dy;
                const nextCol = col + dx;

                if (validStep(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                    newQueue.push([nextRow, nextCol]);
                    seen[nextRow][nextCol] = true;
                }
            }
        }

        steps++;
        queue = newQueue;
    }

    return -1;
};