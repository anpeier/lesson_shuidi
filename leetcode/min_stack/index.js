const arr = [];
arr.push('建宁');
arr.push('曾柔');
arr.push('双儿');
arr.push('阿珂');
//队列 栈
console.log(arr);
const ake = arr.pop();
console.log(arr);
arr.unshift(ake);
console.log(arr);
// 先进后出
arr.unshift('苏荃');
console.log(arr);
const sq = arr.shift();
arr.push(sq);
console.log(arr);