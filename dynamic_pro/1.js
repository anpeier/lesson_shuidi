// 莱温斯坦距离
var a = "mitcmu"; // 原字符串
var b = "mtacnu"; // 比较的字符串
var n = 6,
  m = 6;
var minDist = Infinity; // 最短距离 // 动态规划 回溯

// 回溯算法
function LwstBT(i, j, edist) {
  if (i == n || j == m) {
    // 退出条件
    if (i < n) edist += n - i;
    if (j < m) edist += m - j;
    if (edist < minDist) minDist = edist;
    return;
  }
  if ((a[i] == b[j])) {
    // 两个位置的字符一样 为0
    LwstBT(i + 1, j + 1, edist); // 递归
  } else {
    // i,j 多种决策
    LwstBT(i + 1, j, edist + 1); // i 忽略了
    LwstBT(i, j + 1, edist + 1); // j 忽略了
    LwstBT(i + 1, j + 1, edist + 1); // i j 都忽略了
  }
}
LwstBT(0, 0, 0);
console.log(minDist);
