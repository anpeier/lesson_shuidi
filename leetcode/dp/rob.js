// 198.打家劫舍1
// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
// 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
// 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 给定一个代表每个房屋存放金额的非负整数数组，
// 计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
// 示例 1:
// 输入: [1,2,3,1]
// 输出: 4
// 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 2:
// 输入: [2,7,9,3,1]
// 输出: 12
// 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//      偷窃到的最高金额 = 2 + 9 + 1 = 12 。

// var rob = function(nums) {
//   let len = nums.length;
//   if (len == 0) return 0;
//   if (len == 1) return nums[0];
//   let dp = new Array(len);
//   dp[0] = nums[0];
//   dp[1] = Math.max(nums[0],nums[1])
//   for (let i = 2; i < len; i++) {
//     if (nums[i] + dp[i - 2] > dp[i - 1]) {
//       dp[i] = nums[i] + dp[i - 2];
//     } else {
//       dp[i] = dp[i - 1];
//     }
//   }
//   return dp[len - 1];
// };

var rob = function(nums) {
  let a = 0, // 前n-1个数最大值
    b = 0; // 前n个数最大值
  for (let i = 0; i < nums.length; i++) {
    let c = Math.max(b, a + nums[i]);
    a = b;
    b = c;
  }
  return b;
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
