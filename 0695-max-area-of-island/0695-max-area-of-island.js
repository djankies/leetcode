/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const valid = (row, col) => 0 <= row && 0 <= col && m > row && n > col && grid[row][col] === 1;
    
    const seen = [];
    for (let i = 0; i < m; i++) {
        seen.push(new Array(n).fill(false));
    }
    
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]] // NESW
    const dfs = (row, col) => {
        let area = 1;
        for (const [dx, dy] of directions) {
            const nextRow = row + dy;
            const nextCol = col + dx;
            if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                seen[nextRow][nextCol] = true;
                area += dfs(nextRow, nextCol);
            }
        } 
        return area;
    }
    
    let maxArea = 0;
    
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === 1 && !seen[row][col]) {
                seen[row][col] = true;
                maxArea = Math.max(maxArea, dfs(row, col));
            }
        }
    }
    
    return maxArea;
    
};