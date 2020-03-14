// 73.矩阵置零
// 给定一个 m x n 的矩阵，如果一个元素为 0，
// 则将其所在行和列的所有元素都设为 0。请使用原地算法。
// 示例 1:
// 输入:
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// 输出:
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]
// 示例 2:
// 输入:
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// 输出:
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]
// 进阶:
//     一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
//     一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
//     你能想出一个常数空间的解决方案吗？
var setZeroes = function(matrix) {
  let n = matrix.length,
    m = matrix[0].length;
  let x = new Array(m).fill(0);
  let loc1 = [],loc2 = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        loc1.push(i);
        loc2.push(j);
      }
    }
  }
//   console.log(loc1)
  while (loc1.length > 0) {
    let i = loc1.pop();
    for (let j = 0; j < m; j++) {
      matrix[i][j] = 0;
    }
  }
  while (loc2.length > 0) {
    let j = loc2.pop();
    for (let i = 0; i < n; i++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
};
console.log(
  setZeroes([
    [0, 1, 0, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1]
  ])
);
// console.log(
//   setZeroes([
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5]
//   ])
// );
