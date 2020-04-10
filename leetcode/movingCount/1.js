// 面试题13. 机器人的运动范围
// 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
// 一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下
// 移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于
// k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，
// 因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。
// 请问该机器人能够到达多少个格子？
// 示例 1：
// 输入：m = 2, n = 3, k = 1
// 输出：3
// 示例 1：
// 输入：m = 3, n = 1, k = 0
// 输出：1
// ac地址：https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
// 原文地址：https://xxoo521.com/2020-02-20-moving-count/
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

function bitSum(n) {
  let res = 0;
  while (n) {
    res = res + (n % 10);
    n = Math.floor(n / 10);
  }
  return res;
}

var movingCount = function (m, n, k) {
  let res = 0;
  const directions = [
    [1, 0],
    [0, 1],
  ];
  const queue = [[0, 0]];
  const visited = {
    "0-0": true,
  }; // 标记 (x,y) 是否被访问过

  while (queue.length) {
    const [x, y] = queue.shift();
    //  (x, y) 的数位之和不符合要求
    // 题目要求节点每次只能走1格，所以无法从当前坐标继续出发
    if (bitSum(x) + bitSum(y) > k) {
      continue;
    }
    ++res;

    for (const direction of directions) {
      const newx = direction[0] + x;
      const newy = direction[1] + y;
      if (
        !visited[`${newx}-${newy}`] &&
        newx >= 0 &&
        newy >= 0 &&
        newx < m &&
        newy < n
      ) {
        queue.push([newx, newy]);
        visited[`${newx}-${newy}`] = true;
      }
    }
  }

  return res;
};
