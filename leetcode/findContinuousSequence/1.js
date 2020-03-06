// 暴力法
// var findContinuousSequence = function(target) {
//     var res = []
//     for (let i = 1; i <= Math.floor(target/2); i++) {
//         var sum = i,arr = [sum]
//         for (let j = i+1; j <= Math.ceil(target/2); j++) {
//             sum += j
//             arr.push(j)
//             if (sum == target) {
//                res.push(arr)
//                break
//             }else if(sum > target){
//                 break
//             }
//         }
//     }
//     return res
// };

// 双指针
var findContinuousSequence = function(target) {
  var res = [],
    arr = [];
  let l = 1,
    r = 2;
  while (l < r) {
    sum = ((r - l + 1) * (l + r)) / 2;
    if (sum == target) {
      for (let i = l; i <= r; i++) {
        arr.push(i);
      }
      res.push(arr);
      arr = [];
      l++
    } else if (sum > target) {
      l++;
    } else {
      r++;
    }
  }
  return res
};

console.log(findContinuousSequence(15));
