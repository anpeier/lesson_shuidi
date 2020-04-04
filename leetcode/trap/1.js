// 42. 接雨水
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，
// 计算按此排列的柱子，下雨之后能接多少雨水。
// 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，
// 在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
// 示例:
// 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出: 6
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let sum = 0;
  for (let index = 1; index < height.length - 1; index++) {
    let leftMax = 0; //找左边最大高度
    for (let i = index - 1; i >= 0; i--) {
      leftMax = height[i] >= leftMax ? height[i] : leftMax;
    }
    let rightMax = 0; //找右边最大高度
    for (let i = index + 1; i < height.length; i++) {
      rightMax = height[i] >= rightMax ? height[i] : rightMax;
    }
    let min = Math.min(leftMax, rightMax); //得到左右两边最大高度中较矮的那个高度
    if (min > height[index]) {
      sum = sum + min - height[index]; //接水量 = 左右两边最大高度中较矮的那个高度 - 当前项的高度
    }
    //console.log(leftMax, rightMax, sum)
  }
  return sum;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
