// Given an = x = 2d grid map of 1s (land) and 0s (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid [
// [1,1,1,1,0],
// [1,1,0,1,0],
// [1,1,0,0,0],
// [0,0,0,0,0]
// ]

// Output: 1

// Example 2:

// Input: grid=
// [
// [1,1,0,0,0],
// [1,1,0,0,0],
// [0,0,1,0,0],
// [0,0,0,1,1],
// ]
// Output: 3

function numIslands(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }

    const numRows = grid.length;
    const numCols = grid[0].length;
    let count = 0;

    function dfs(row, col) {
        if (row < 0 || col < 0 || row >= numRows || col >= numCols || grid[row][col] === 0) {
            return;
        }

        grid[row][col] = 0; // Mark the current cell as visited

        // Visit adjacent cells in all four directions
        dfs(row - 1, col); // Up
        dfs(row + 1, col); // Down
        dfs(row, col - 1); // Left
        dfs(row, col + 1); // Right
    }

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (grid[i][j] === 1) {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
}

// Example usage
const grid = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

const result = numIslands(grid);
console.log(result); // Output: 1
