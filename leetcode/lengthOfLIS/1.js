// 给定一个无序的整数数组，找到其中最长上升子序列的长度。
// 示例:
// 输入: [10,9,2,5,3,7,101,18]
// 输出: 4
// 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。

// 动态规划
/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function(nums) {
//   let n = nums.length;
//   if (n == 0) {
//     return 0;
//   }
//   let dp = new Array(n).fill(1);
//   let max = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         // dp[i] 的值代表 nums 前 i 个数字的最长子序列长度。
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//     max = Math.max(max, dp[i]);
//   }
//   return max;
// };

// 动态规划 + 二分查找
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let n = nums.length;
    if(n <= 1){
        return n;
    }
    let tail = new Array(n);
    tail[0] = nums[0];
    let end = 0;
    for(let i = 1;i < n;i++){
        if(nums[i] > tail[end]){
            end++;
            tail[end] = nums[i];
        }else{
            let left = 0;
            let right = end;
            while(left < right){
                let mid = left + ((right - left) >> 1);
                if(tail[mid] < nums[i]){
                    left = mid + 1;
                }else{
                    right = mid;
                }
            }
            tail[left] = nums[i];
        }
    }
    return end + 1;
};


// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// console.log(lengthOfLIS([]));
console.log(lengthOfLIS([10, 9, 2, 5, 3, 4]));
console.log(lengthOfLIS([2, 4, 8, 5, 6]));
