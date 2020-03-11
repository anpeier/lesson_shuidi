// var canThreePartsEqualSum = function(A) {
//   var sum = A.reduce((prev, next) => prev + next);
//   if (sum % 3 != 0) return false;
//   let len = A.length;
//   let avg = sum / 3;
//   let s = 0,
//     count = 0;
//   for (let i = 0; i < len; i++) {
//     s += A[i];
//     if (s == avg) {
//       s = 0;
//       count++;
//     }
//     if(count == 3) return true
//   }
//   return false;
// };

var canThreePartsEqualSum = function(A) {
  var sum = A.reduce((prev, next) => prev + next);
  if (sum % 3 != 0) return false;
  let len = A.length;
  let avg = sum / 3;
  let sl = A[0],
    sr = A[len - 1],
    i = 0,
    j = len - 1;
  while (i + 1 < j) {
    if (sl == avg && sr == avg) return true;
    if (sl != avg) {
      sl += A[++i];
    }
    if (sr != avg) {
      sr += A[--j];
    }
  }
  return false;
};
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]));
console.log(canThreePartsEqualSum([1, -1, 1, -1, 1, -1, 1, -1]));
console.log(canThreePartsEqualSum([1, -1, 1, -1]));
console.log(canThreePartsEqualSum([6, 1, 1, 13, -1, 0, -10, 20]));
