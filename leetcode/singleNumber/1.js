// 只出现一次的数字
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。
// 找出那个只出现了一次的元素。
// 说明：
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
// 示例 1:
// 输入: [2,2,1]
// 输出: 1
// 示例 2:
// 输入: [4,1,2,1,2]
// 输出: 4

// 先排序再查找
// var singleNumber = function(nums) {
//   nums = nums.sort((a,b) => a-b)
//   for (let i = 0; i < nums.length; i+=2) {
//     if(nums[i] != nums[i+1])
//     return nums[i]
//   }
// };

// 位运算中的异或运算 XOR
// 一个数和 0 做 XOR 运算等于本身：a⊕0 = a
// 一个数和其本身做 XOR 运算等于 0：a⊕a = 0
// XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
// 故而在以上的基础条件上，将所有数字按照顺序做抑或运算，最后剩下的结果即为唯一的数字
var singleNumber = function(nums) {
  let ans = 0;
  for (const num of nums) {
    ans ^= num;
  }
  return ans;
};
console.log(singleNumber([2, 4, 3, 5, 4, 2, 3]));
