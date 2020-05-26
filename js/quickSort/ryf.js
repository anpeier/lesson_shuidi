const arr = [3, 2, 1, 5, 6, 4];

// 一次快排能够给一个
// let pivot
// 1. pivot 找到正确的位置
// 2. 左边 小于 pivot  右边 大于 pivot
// 没有原地交换数组里面的两个数据
const quickSort = function (arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    if (arr[i] > pivot) right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort(arr));
