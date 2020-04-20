// 200. 岛屿数量
// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。
// 示例 1:
// 输入:
// 11110
// 11010
// 11000
// 00000
// 输出: 1
// 示例 2:
// 输入:
// 11000
// 11000
// 00100
// 00011
// 输出: 3
// 解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。

var numIslands = function (grid) {
  if (grid.length == 0) return 0;
  let count = 0,
    row = grid.length,
    col = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        dfs(grid, i, j, row, col);
        count++;
      }
    }
  }
  return count;
};

function dfs(grid, i, j, row, col) {
  if (i < 0 || j < 0 || i > row - 1 || j > col - 1 || grid[i][j] === "0")
    return;

  grid[i][j] = "0";

  dfs(grid, i + 1, j, row, col);
  dfs(grid, i, j + 1, row, col);
  dfs(grid, i - 1, j, row, col);
  dfs(grid, i, j - 1, row, col);
}

var numIslands = function (grid) {
  if (!grid.length) return 0;
  let count = 0,
    queue = [],
    dx = [0, 0, 1, -1],
    dy = [1, -1, 0, 0],
    row = grid.length,
    col = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        grid[i][j] == 0;
        queue.push([i, j]);
        while (queue.length) {
          let temp = queue.shift();
          for (let m = 0; m < 4; m++) {
            newX = dx[m] + temp[0];
            newY = dy[m] + temp[1];
            if (
              newX < 0 ||
              newX > row - 1 ||
              newY < 0 ||
              newY > col - 1 ||
              grid[newX][newY] == 0
            ) {
              continue;
            }
            grid[newX][newY] = 0;
            queue.push([newX, newY]);
          }
        }
        count++;
      }
    }
  }
  return count;
};

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
