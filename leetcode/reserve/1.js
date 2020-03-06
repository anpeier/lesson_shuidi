// var reverse = function(x) {
//     var max = Math.pow(2, 31) - 1;
//     var min = -Math.pow(2, 31);
//     var y = 0;
//     while(x !== 0) {
//         y = 10 * y + x % 10;
//         x = ~~(x/10);
//         // console.log(x)
//     }
//     if (y > max) return 0;
//     if (y < min) return 0;
//     return y;
// };

var reverse = function(x) {
  const edeg = 2**31
  const MIN = -edeg
  const MAX = edeg - 1
  let result
  let arr = ('' + x).split('')

  arr.reverse();

  if (arr[0] === '0') {
    arr.shift()
  }
  
  if (arr[arr.length-1] === '-') {
    arr.pop()
    arr.unshift('-')
  } 

  result = +arr.join('')
  return (result > MAX || result < MIN) ? 0 : result
};
console.log(reverse(-123))