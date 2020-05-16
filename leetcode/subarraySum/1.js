// 560 和为k的子数组
// 给定一个整数数组和一个整数 k，你需要找到该数组中和为 
// k 的连续的子数组的个数。
// 示例 1 :
// 输入:nums = [1,1,1], k = 2
// 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
// 说明 :
// 数组的长度为 [1, 20,000]。
// 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。


// var subarraySum = function (nums, k) {
//   let count = 0
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j]
//       if (sum === k) count++
//     }
//   }
//   return count
// };

var subarraySum = (nums, k) => {
  if (nums.length === 0) return 0
  let map = { 0: 1 }
  let prefixSum = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i]
    if (map[prefixSum - k]) {
      count += map[prefixSum - k];
    }
    if (map[prefixSum]) {
      map[prefixSum]++
    } else {
      map[prefixSum] = 1
    }
  }
  return count
}

console.log(subarraySum([0,0,0,0,0,0,0,0,0,0],0))
console.log(subarraySum([28,54,7,-70,22,65,-6],100))