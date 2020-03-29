// 1162. 地图分析
// 你现在手里有一份大小为 N x N 的『地图』（网格） grid，
// 上面的每个『区域』（单元格）都用 0 和 1 标记好了。其中 0 代表海洋，1 代表陆地，
// 你知道距离陆地区域最远的海洋区域是是哪一个吗？
// 请返回该海洋区域到离它最近的陆地区域的距离。
// 我们这里说的距离是『曼哈顿距离』（ Manhattan Distance）：
// (x0, y0) 和 (x1, y1) 这两个区域之间的距离是 |x0 - x1| + |y0 - y1| 。
// 如果我们的地图上只有陆地或者海洋，请返回 -1。
// 示例 1：
// 输入：[
//     [1,0,1],
//     [0,0,0],
//     [1,0,1]
//   ]
// 输出：2
// 解释：
// 海洋区域 (1, 1) 和所有陆地区域之间的距离都达到最大，最大距离为 2。
// 示例 2：
// 输入：[
//     [1,0,0],
//     [0,0,0],
//     [0,0,0]
//   ]
// 输出：4
// 解释：
// 海洋区域 (2, 2) 和所有陆地区域之间的距离都达到最大，最大距离为 4。

/**地图分析
 * @param {number[][]} grid
 * @return {number}
 */
// var maxDistance = function(grid) {
//   var land = [];
//   var ocean = [];
//   //记录 陆地和海洋
//   for (var i = 0; i < grid.length; i++) {
//     for (var j = 0; j < grid.length; j++) {
//       if (grid[i][j]) {
//         land.push([i, j]);
//       } else {
//         ocean.push([i, j]);
//       }
//     }
//   }
//   if (land.length == 0 || ocean.length == 0) {
//     return -1; //没有海洋或没有陆地
//   }
//   //求每一个海洋区域跟所有陆地的最小距离，
//   //然后在所有最小距离中求最大距离，就是所有海洋离陆地最远的距离
//   var max = -1;
//   for (var i = 0; i < ocean.length; i++) {
//     //求一片海洋到所有陆地的距离中最小的距离
//     var min = 9999999;
//     for (var j = 0; j < land.length; j++) {
//       var dis = distance(ocean[i], land[j]);
//       if (dis < min) {
//         min = dis;
//       }
//       if (min == 1) {
//         break; //提前结束，最小可能的距离是1
//       }
//     }
//     //求最小距离中的最大距离
//     if (min > max) {
//       max = min;
//     }
//   }
//   return max;
// };

// /**
//  * 曼哈顿距离
//  * @param a
//  * @param b
//  * @returns {number}
//  */
// function distance(a, b) {
//   return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
// }

var maxDistance = function(grid) {
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  let queue = [];
  let m = grid.length,
    n = grid[0].length;
  // 所有陆地入队
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        queue.push([i, j]);
      }
    }
  }

  let hasOcean = false,
    point = [];
  while (queue.length > 0) {
    point = queue.shift();
    let x = point[0],
      y = point[1];
    // 把该元素的四周海洋入队
    for (let i = 0; i < 4; i++) {
      let newX = x + dx[i],
        newY = y + dy[i];
      // 检查边界或不是海洋
      if (
        newX < 0 ||
        newX >= m ||
        newY < 0 ||
        newY >= n ||
        grid[newX][newY] != 0
      ) {
        continue;
      }
      grid[newX][newY] = grid[x][y] + 1; // 标记该元素已被访问,距离加1
      hasOcean = true;
      queue.push([newX, newY]);
    }
  }

  if (!point.length || !hasOcean) {
    return -1;
  }
//   console.log(point);
//   console.log(grid);
  return grid[point[0]][point[1]] - 1;
};

console.log(
  maxDistance([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ])
);
