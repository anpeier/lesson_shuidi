// var merge = function(A, m, B, n) {
//     A.splice(m, A.length,...B)
//     A.sort((a, b) => a - b)
// }

// var merge = function(A, m, B, n) {
//   var arr = [];
//   let pa = 0,
//     pb = 0;
//   while (pa < m && pb < n) {
//     if (A[pa] > B[pb]) {
//       arr.push(B[pb]);
//       pb++;
//     } else {
//       arr.push(A[pa]);
//       pa++;
//     }
//   }
//   A = pa > pb ? arr.concat(B.splice(pb, n)) : arr.concat(A.splice(pa, m));
//   console.log(A)
// };

// var merge = function(A, m, B, n) {
//     while(m>0 && n>0){
//         A[m+n-1] = A[m-1]>B[n-1] ? A[m-- -1] : B[n-- -1]
//     }
//     while(n>0){
//         A[n-1] = B[n-- -1]
//     }
// }


merge([2, 5, 6], 3, [1, 2, 3, 0, 0, 0], 3);
