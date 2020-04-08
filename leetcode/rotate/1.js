// 面试题 01.07. 旋转矩阵
// 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。
// 请你设计一种算法，将图像旋转 90 度。
// 不占用额外内存空间能否做到？
// 示例 1:
// 给定 matrix =
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],
// 原地旋转输入矩阵，使其变为:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// 0 0 2 0
// 0 1 1 0
// 0 2 0 0
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var rotate = function (matrix) {
//   const length = matrix.length;

//   for (let i = length - 1; i >= 0; i--) {
//     for (let j = 0; j < length; j++) {
//       matrix[j].push(matrix[i][j]);
//     }
//   }
//   // 构造成：
//   //   [
//   //     [1, 2, 3, 7, 4, 1],
//   //     [4, 5, 6, 8, 5, 2],
//   //     [7, 8, 9, 9, 6, 3],
//   //   ];
//   for (let i = 0; i < length; i++) {
//     matrix[i].splice(0, length);
//   }
// };

//一、倒序倒置法
let rotate = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  matrix.forEach((row) => row.reverse());
  console.log(matrix);
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
