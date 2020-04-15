// 542. 01 矩阵
// 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
// 两个相邻元素间的距离为 1 。
// 示例 1:
// 输入:
// 0 0 0
// 0 1 0
// 0 0 0
// 输出:
// 0 0 0
// 0 1 0
// 0 0 0
// 示例 2:
// 输入:
// 0 0 0
// 0 1 0
// 1 1 1
// 输出:
// 0 0 0
// 0 1 0
// 1 2 1
// 注意:
// 给定矩阵的元素个数不超过 10000。
// 给定矩阵中至少有一个元素是 0。
// 矩阵中的元素只在四个方向上相邻: 上、下、左、右。

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  let N = matrix.length;

  if (N === 0) {
    return [];
  }

  let M = matrix[0].length;

  let res = Array.from(new Array(N), () => new Array(M).fill(0));

  let dx = [1, -1, 0, 0],
    dy = [0, 0, 1, -1],
    Q = [],
    visited = new Set(); // 已访问元素

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] === 0) { 
        visited.add(`${i}:${j}`);
        Q.push({ i, j }); // 所有0入队
      }
    }
  }

  while (Q.length !== 0) {
    let { i, j } = Q.shift();

    for (let k = 0; k < 4; k++) {
      let nI = i + dx[k],
        nJ = j + dy[k];

      if (
        nI < 0 ||
        nI >= N ||
        nJ < 0 ||
        nJ >= M ||
        visited.has(`${nI}:${nJ}`) // 边界条件
      ) {
        continue;
      }

      // 累加
      res[nI][nJ] = res[i][j] + 1;

      visited.add(`${nI}:${nJ}`);

      Q.push({ i: nI, j: nJ });
    }
  }

  return res;
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  // dp optimise
  if (matrix.length == 0) {
    return [];
  }
  let m = matrix.length,
    n = matrix[0].length;
  // left-top to right-bottom
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] != 0) {
        matrix[i][j] = m + n;
        if (i > 0) {
          matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j]);
        }
        if (j > 0) {
          matrix[i][j] = Math.min(matrix[i][j - 1] + 1, matrix[i][j]);
        }
      }
    }
  }
  // right-bottom to left-top
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      // distance
      if (matrix[i][j] != 0) {
        if (j < n - 1) {
          matrix[i][j] = Math.min(matrix[i][j], matrix[i][j + 1] + 1);
        }
        if (i < matrix.length - 1) {
          matrix[i][j] = Math.min(matrix[i][j], matrix[i + 1][j] + 1);
        }
      }
    }
  }
  return matrix;
};
