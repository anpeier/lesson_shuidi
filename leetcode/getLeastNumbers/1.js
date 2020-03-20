// 最小的k个数
// 输入整数数组 arr ，找出其中最小的 k 个数。
// 例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
// 示例 1：
// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]
// 示例 2：
// 输入：arr = [0,1,2,1], k = 1
// 输出：[0]

// var getLeastNumbers = function(arr, k) {
//   if(k == 0) return []
//   arr = arr.sort((a,b)=> {return a-b})
//   let res = []
//   for (let i = 0; i < k; i++) {
//     res.push(arr[i])
//   }
//   return res
// };

// var getLeastNumbers = function(arr,k) {
//   if(k==0) return []
//   let res = []
//   for(let i = 0; i< k; i++){
//     res.push(arr[i])
//   }
//   for(let i= k+1;i < arr.length;i++){
//       if(r)
//   }
// }

// var getLeastNumbers = function(arr, k) {
//   let len = arr.length
//   if (!len || !k) return []
//   let heap = new Heap()
//   // 建立最小堆，O(N) 复杂度
//   heap.init(arr)
//   let res = []
//   while (k) {
//     // 依次从堆顶弹出最小元素，O(logN) 复杂度
//     res.push(heap.delete())
//     k--
//   }
//   return res
// }

// function Heap() {
//   this.heap = [-Infinity]
// }
// Heap.prototype.init = function(arr) {
//   this.heap = [-Infinity]
//   this.heap.push(...arr)
//   let size = arr.length
//   // 从最后一个元素的父节点开始实现最小堆，类似删除操作中将最后一个元素放在堆顶进行调整。
//   for (let pos = parseInt(size / 2); pos > 0; pos--) {
//     let tmp = this.heap[pos]
//     let parent, child
//     for (parent = pos; parent * 2 <= size; parent = child) {
//       child = parent * 2
//       if (child + 1 <= size && this.heap[child + 1] < this.heap[child]) child++
//       if (tmp < this.heap[child]) break
//       else this.heap[parent] = this.heap[child]
//     }
//     this.heap[parent] = tmp
//   }
// }
// Heap.prototype.delete = function() {
//   let size = this.heap.length - 1
//   let res = this.heap[1]
//   // 拿到最后一个元素
//   let tmp = this.heap[size]
//   this.heap.length--
//   size--
//   // 将最后一个元素放在堆顶，并调整最小堆
//   let parent, child
//   for (parent = 1; parent * 2 <= size; parent = child) {
//     child = parent * 2
//     if (child + 1 <= size && this.heap[child + 1] < this.heap[child]) child++
//     if (tmp < this.heap[child]) break
//     else this.heap[parent] = this.heap[child]
//   }
//   this.heap[parent] = tmp
//   return res
// }

var getLeastNumbers = function(arr, k) {
  let len = arr.length;
  if (!len || !k) return [];
  let start = 0;
  let end = len - 1;
  // 寻找一次标杆元素的位置
  let index = quikSort(arr, start, end);
  // 如果标杆元素的位置不等于 K
  while (index !== k - 1) {
    if (index > k - 1) {
      // 如果上一次查找，标杆元素位置大于目标位置
      end = index - 1;
      index = quikSort(arr, start, end);
    } else {
      // 如果上一次查找，标杆元素位置小于目标位置
      start = index + 1;
      index = quikSort(arr, start, end);
    }
  }
  return arr.slice(0, index + 1);
};

function quikSort(arr, left, right) {
  let pivot = arr[left];
  while (left < right) {
    while (left < right && arr[right] >= pivot) right--;
    arr[left] = arr[right];
    while (left < right && arr[left] < pivot) left++;
    arr[right] = arr[left];
  }
  arr[left] = pivot;
  return left;
}
console.log(getLeastNumbers([0, 1, 2, 1], 0));
