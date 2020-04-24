// 面试题51. 数组中的逆序对
// 在数组中的两个数字，如果前面一个数字大于后面的数字，
// 则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。
// 示例 1:
// 输入: [7,5,6,4]
// 输出: 5

// var reversePairs = function(nums) {
//   if(!nums.length) return 0
//    let count = 0
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i+1; j < nums.length; j++) {
//       if(nums[j]<nums[i]){
//         count++
//       }
//     }
//   }
//   return count
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  // 归并排序
  let sum = 0;
  mergeSort(nums);
  return sum;

  function mergeSort(nums) {
    if (nums.length < 2) return nums;
    const mid = parseInt(nums.length / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right) {
    let res = [];
    let leftLen = left.length;
    let rightLen = right.length;
    let len = leftLen + rightLen;
    for (let index = 0, i = 0, j = 0; index < len; index++) {
      if (i >= leftLen) res[index] = right[j++];
      else if (j >= rightLen) res[index] = left[i++];
      else if (left[i] <= right[j]) res[index] = left[i++];
      else {
        res[index] = right[j++];
        sum += leftLen - i; //在归并排序中唯一加的一行代码
      }
    }
    return res;
  }
};

console.log(reversePairs([7, 5, 6, 4]));
