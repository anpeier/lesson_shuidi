// 912. 排序数组
// 给你一个整数数组 nums，将该数组升序排列。
// 示例 1：
// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]
// 示例 2：
// 输入：nums = [5,1,1,2,0,0]
// 输出：[0,0,1,1,2,5]

// var sortArray = function(nums) {
//   nums = nums.sort((a, b) => a - b);
//   return nums;
// };

// var sortArray = function(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length - i -1; j++) {
//       if(nums[j] > nums[j+1]){
//         let temp = nums[j]
//         nums[j] = nums[j+1]
//         nums[j+1] = temp
//       }
//     }
//   }
//   return nums
// };


// function bubbleSort2(arr) {
//     console.time('改进后冒泡排序耗时');
//     var i = arr.length-1;  //初始时,最后位置保持不变
//     while ( i> 0) {
//         var pos= 0; //每趟开始时,无记录交换
//         for (var j= 0; j< i; j++)
//             if (arr[j]> arr[j+1]) {
//                 pos= j; //记录交换的位置
//                 var tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
//             }
//         i= pos; //为下一趟排序作准备
//      }
//      console.timeEnd('改进后冒泡排序耗时');
//      return arr;
// }
// var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log(bubbleSort2(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

// function bubbleSort3(arr3) {
//     var low = 0;
//     var high= arr.length-1; //设置变量的初始值
//     var tmp,j;
//     console.time('2.改进后冒泡排序耗时');
//     while (low < high) {
//         for (j= low; j< high; ++j) //正向冒泡,找到最大者
//             if (arr[j]> arr[j+1]) {
//                 tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
//             }
//         --high;                 //修改high值, 前移一位
//         for (j=high; j>low; --j) //反向冒泡,找到最小者
//             if (arr[j]<arr[j-1]) {
//                 tmp = arr[j]; arr[j]=arr[j-1];arr[j-1]=tmp;
//             }
//         ++low;                  //修改low值,后移一位
//     }
//     console.timeEnd('2.改进后冒泡排序耗时');
//     return arr3;
// }
// var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log(bubbleSort3(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

// 选择排序
// function selectionSort(arr) {
//     var len = arr.length;
//     var minIndex, temp;
//     console.time('选择排序耗时');
//     for (var i = 0; i < len - 1; i++) {
//         minIndex = i;
//         for (var j = i + 1; j < len; j++) {
//             if (arr[j] < arr[minIndex]) {     //寻找最小的数
//                 minIndex = j;                 //将最小数的索引保存
//             }
//         }
//         temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }
//     console.timeEnd('选择排序耗时');
//     return arr;
// }
// var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]


// 归并排序
// function mergeSort(arr) {  //采用自上而下的递归方法
//     var len = arr.length;
//     if(len < 2) {
//         return arr;
//     }
//     var middle = Math.floor(len / 2),
//         left = arr.slice(0, middle),
//         right = arr.slice(middle);
//     return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right)
// {
//     var result = [];
//     console.time('归并排序耗时');
//     while (left.length && right.length) {
//         if (left[0] <= right[0]) {
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }

//     while (left.length)
//         result.push(left.shift());

//     while (right.length)
//         result.push(right.shift());
//     console.timeEnd('归并排序耗时');
//     return result;
// }
// var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log(mergeSort(arr));

// 快排
var sortArray = function(arr) {
    let pivot = arr[0]
    let left = []
    let right = []

    if (arr.length < 2) return arr

    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    }

    return sortArray(left).concat([pivot], sortArray(right))  
};


console.log(sortArray([5, 2, 3, 1]));
