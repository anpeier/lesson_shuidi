// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，
// 并返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
// 示例 1:
// 给定 nums = [3,2,2,3], val = 3,
// 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
// 你不需要考虑数组中超出新长度后面的元素。
// var removeElement = function(nums, val) {
//   let left = 0,
//     right = nums.length - 1;
//   while (left <= right) {
//     if (nums[left] == val && nums[right] != val) {
//       nums[left] = nums[right];
//       left++;
//       right--;
//     } else if (nums[left] != val) {
//       left++;
//     } else if (nums[right] == val) right--;
//   }
//   return left;
// };

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//     let ans = 0;
//     for(const num of nums) {
//         if(num != val) {
//             nums[ans] = num;
//             ans++;
//         }
//     }
//     return ans;
// };

var removeElement = function(nums, val) {
  let ans = nums.length;
  for (let i = 0; i < ans; ) {
    if (nums[i] == val) {
      nums[i] = nums[ans - 1];
      ans--;
    } else {
      i++;
    }
  }
  return ans;
};

console.log(removeElement([1, 2, 4, 5, 3], 3));
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
// console.log(removeElement([4, 5], 4));
