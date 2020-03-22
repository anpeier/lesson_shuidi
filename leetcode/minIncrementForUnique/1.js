// 945.使数组唯一的最小增量
// 给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。
// 返回使 A 中的每个值都是唯一的最少操作次数。
// 示例 1:
// 输入：[1,2,2]
// 输出：1
// 解释：经过一次 move 操作，数组将变为 [1, 2, 3]。
// 示例 2:
// 输入：[3,2,1,2,1,7]
// 输出：6
// 解释：经过 6 次 move 操作，数组将变为 [3, 4, 1, 2, 5, 7]。
// 可以看出 5 次或 5 次以下的 move 操作是不能让数组的每个值唯一的。
// 提示：
// 0 <= A.length <= 40000
// 0 <= A[i] < 40000

// 超时
// var minIncrementForUnique = function(A) {
//   let nums = [],
//     count = 0;
//     console.log(nums)
//   for (let i = 0, len = A.length; i < len; i++) {
//     while(nums.indexOf(A[i]) != -1){
//       A[i] += 1
//       count++
//     }
//     nums.push(A[i])
//   }
//   return count
// };

var minIncrementForUnique = function(A) {
  let count = 0;
  A = A.sort((a, b) => a - b); // 排序
  for (let i = 1, len = A.length; i < len; i++) {
    if(A[i] <= A[i-1]){ // 如果当前遍历的数小于或等于前一个数，说明要move
      let n = A[i-1] - A[i] + 1 // 计算当前数和前一个数的差值再加1，就实现了当前数比前一个数多1。
      A[i] += n
      count += n
     }
  }
  return count;
};
// console.log(minIncrementForUnique([1, 2, 2]));
console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]));
