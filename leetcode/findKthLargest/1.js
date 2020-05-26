// 215. 数组中的第K个最大元素
// 在未排序的数组中找到第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，
// 而不是第 k 个不同的元素。
// 示例 1:
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:
// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4
// 说明:
// 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

var findKthLargest = function (nums, k) {
  function swap(a, b) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }

  // 查找nums[start]正确的排序位置
  // 直到找到排在第k-1位的。就是所求结果
  function findLocation(start, end) {
    if (start === end) return nums[start];

    let i = start;
    let j = end + 1;

    while (true) {
      while (nums[++i] > nums[start]) if (i === end) break;
      while (nums[--j] < nums[start]) if (j === start) break;

      if (i < j) swap(i, j); // 交换左右边元素，保证左分支元素 大于 右分支元素

      if (i >= j) {
        swap(start, j);
        break;
      }
    }

    // 找到所求元素
    if (j === k - 1) return nums[j];

    // j>k-1 从nums[j]的左边分支开始查找
    // 否则 从右边分支查找
    if (j > k - 1) return findLocation(start, j - 1);
    else return findLocation(j + 1, end);
  }

  return findLocation(0, nums.length - 1);
};
