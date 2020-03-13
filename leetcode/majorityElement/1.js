// 新建一个map 遍历nums 如果map 中没有键为nums[i]的元素则向map中添加一个键为nums[i],
// 值为1 的项,如果存在则键为nums[i]的值+1
// 遍历这个map 如果值大于Math.floor(nums.length / 3)则向结果数组中加入这个键

// var majorityElement = function(nums) {
//   const map = new Map(),
//     res = [];
//   let length = nums.length;
//   for (let i = 0; i < length; i++) {
//     let value = nums[i];
//     if (!map.has(value)) {
//       map.set(value, 1);
//     } else {
//       map.set(value, map.get(value) + 1);
//     }
//   }

//   for (const key of map) {
//     if (key[1] > Math.floor(length / 3)) {
//       res.push(key[0]);
//     }
//   }

//   return res;
// };


// 给定一个大小为 n 的数组，找到其中的多数元素。
// 多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
var majorityElement = function(nums) {
  let res = nums[0],
    count = 1,
    len = nums.length;
  for (let i = 1; i < len; i++) {
    if(res == nums[i]){
      count++
    }else{
      count--
    }
    if(count < 0){
      res = nums[i]
      count=0
    }
  }
  return res
};

// 效率低
// var majorityElement = function(nums) {
//   nums = nums.sort((a,b) => a-b)
//   return nums[Math.floor(nums.length/2)]
// }

console.log(majorityElement([1, 1, 1, 1, 1, 2, 2, 2]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([3,2,3]));
