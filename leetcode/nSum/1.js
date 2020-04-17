// 给定无序数组，n，data，找到n个数和为data
var ksum = function (data, n, sum) {
  let list = [];
  backtrack(data, list, n, sum);
  return list;
};
function backtrack(data, list, n, sum, tempList = [], start = 0) {
  if (tempList.length === n) {
    // n 个数
    if (tempList.reduce((a, b) => a + b, 0) === sum) {
      // 找到
      list.push(tempList);
    }
    return;
  }
  // tempList 已经做过的选择
  // for 枚举出每一步可以进行选择的列表
  for (let i = start; i < data.length; i++) {
    // 数组里面的每一项都要选择
    tempList.push(data[i]);
    // 之后的步骤
    backtrack(data, list, n, sum, tempList.slice(0), i + 1);
    // 撤销上一步选择
    tempList.pop();
  }
}
// [1, 2, 3, 4, 5, 7
console.log(ksum([1, 2, 3, 4, 5, 7], 3, 10));
