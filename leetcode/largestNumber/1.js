// 179.最大数
// 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。
// 示例 1:
// 输入: [10,2]
// 输出: 210
// 示例 2:
// 输入: [3,30,34,5,9]
// 输出: 9534330
// 说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。

// 比较 ab 与 ba的大小，按降序排列；
// 再将数组转化为字符串。
var largestNumber = function(nums) {
  nums = nums.sort((a, b) => {
    let S1 = `${a}${b}`;
    let S2 = `${b}${a}`;
    return S2 - S1;
  });
  return nums[0] ? nums.join("") : "0";
};
console.log(largestNumber([10, 2]));
console.log(largestNumber([3, 30, 34, 5, 9]));
