/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let q = []; // 烂橘子坐标
  let newFresh = 0; // 新鲜橘子个数
  let minutes = 0;
  // 计算新鲜橘子个数 和将初始烂橘子坐标放入栈中
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) q.push([i, j]);
      if (grid[i][j] === 1) newFresh++;
    }
  }

  while (q.length && newFresh) {
    let newQ = []; // 下一轮要感染的橘子坐标
    while (q.length) {
      let badOrange = q.shift();
      console.log(badOrange[0] + '  aaaa')
      let newRottens = infectOthers(grid, badOrange[0], badOrange[1], newQ);
      newFresh -= newRottens;
    }
    minutes++;
    q = newQ;
  }
  if (newFresh !== 0) return -1;
  return minutes;
};

var infectOthers = function (grid, i, j, q) {
  let infected = 0;
  if (i > 0 && grid[i - 1][j] === 1) {
    grid[i - 1][j]++;
    infected++;
    q.push([i - 1, j]);
  }
  if (j > 0 && grid[i][j - 1] === 1) {
    grid[i][j - 1]++;
    infected++;
    q.push([i, j - 1]);
  }
  if (i < grid.length - 1 && grid[i + 1][j] === 1) {
    grid[i + 1][j]++;
    infected++;
    q.push([i + 1, j]);
  }
  if (j < grid[0].length - 1 && grid[i][j + 1] === 1) {
    grid[i][j + 1]++;
    infected++;
    q.push([i, j + 1]);
  }

  return infected;
}
orangesRotting([[2,1,1],[1,1,0],[0,1,1]])