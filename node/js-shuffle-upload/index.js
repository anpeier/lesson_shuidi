let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// 伪随机
function shuffle(arr) {
  // ? 
  arr.sort(() => Math.random() - 0.5);
  return arr;
}

let t = 10000;
for (let i = 0; i < t; i ++) {
  let sorted = shuffle(arr.slice(0));
  sorted.forEach((num, i) => {
    sum[i] = num + sum[i];
  });
}
console.log(sum.map(n => n / t));  
arr.sort((a, b) => a - b);   // 升序
let arr1 = [1, 2, 3, 4];
function bubble(arr) {
  for (let i = 0; i < arr.length; i ++) {
    for (let j = 0; j < arr.length - i; j ++) {
      let k = j + 1;
      // sort 回调
      // > 0  < 0
      // 随机 
      if (arr[j] < arr[k]) {
        [arr[j], arr[k]] = [arr[k], arr[j]]
      }
    }
  }
  console.log(arr);
}
bubble(arr1)

// arr.sort((a, b) => b - a);   // 
// () => Math.random() - 0.5 每次 又可能 > 0 下一次 < 0
// 
// sort(cb)
// cb 
// (a, b) 小于 0 ，那么 a 会被排列到 b 之前
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// a - b < 0
// 0 - 1 < 0
// b - a 1 - 0 > 0
// 大于 0 ， b 会被排列到 a 之前
// 1, 0 降序
