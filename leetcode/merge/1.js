// var merge = function(A, m, B, n) {
//     A.splice(m, A.length,...B)
//     A.sort((a, b) => a - b)
// }

var merge = function(A, m, B, n) {
  var arr = [];
  let pa = 0,
    pb = 0;
  while (pa < m && pb < n) {
    if (A[pa] > B[pb]) {
      arr.push(B[pb]);
      pb++;
    } else {
      arr.push(A[pa]);
      pa++;
    }
  }
  A = pa > pb ? arr.concat(B.splice(pb, n)) : arr.concat(A.splice(pa, m));
  //   console.log(A)
  return A;
};


// 因为 nums1 的空间都集中在后面，所以从后向前处理排序的数据会更好，节省空间，一边遍历一边将值填充进去
// 设置指针 len1 和 len2 分别指向 nums1 和 nums2 的有数字尾部，从尾部值开始比较遍历，同时设置指针 len 指向 nums1 的最末尾，每次遍历比较值大小之后，则进行填充
// 当 len1<0 时遍历结束，此时 nums2 中海油数据未拷贝完全，将其直接拷贝到 nums1 的前面，最后得到结果数组
// 时间复杂度：O(m+n)O(m+n)O(m+n)
var merge = function(A, m, B, n) {
  while (m > 0 && n > 0) {
    A[m + n - 1] = A[m - 1] > B[n - 1] ? A[m-- - 1] : B[n-- - 1];
  }
  while (n > 0) {
    A[n - 1] = B[n-- - 1];
  }
};

console.log(merge([2, 5, 6], 3, [1, 2, 3, 0, 0, 0], 3));
