const arr = [3, 2, 1, 5, 6, 4];

// 1. pivot 找到正确的位置（数组里面的索引）
// 2. 左边 小于 pivot  右边 大于 pivot
function partition(nums, left, right) {
  if (left >= right) return;
  let pivot = nums[left];
  let j = left; // 记录 比 pivot 大的数
  for (let i = left + 1; i <= right; i++) {
    if (nums[i] < pivot) {
      // 交换
      j++;
      swap(nums, i, j);
    }
  }
  swap(nums, j, left);
  partition(nums, left, j - 1);
  partition(nums, j + 1, right);
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function quickSort(arr) {
  partition(arr, 0, arr.length - 1);
}
quickSort(arr);
console.log(arr);
