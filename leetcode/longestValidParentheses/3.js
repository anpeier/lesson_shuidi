// left right两个变量
// 从左往右 left == right 2*right 更新max
// left < right  ()) left 和 right 都置为0

var longestValidParentheses = function(s) {
  if (!s || s.length < 0) return 0;
  var left = (right = max = 0);
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      left++; // 有多少个(
    } else {
      right++; // )的数量
    }
    if (left == right) {
      max = Math.max(max, 2 * right); // 2*right个
    } else if (right > left) {
      left = right = 0;
    }
  }
  // 反向遍历 将 ( 和 ) 变换一下
  left = right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == ")") {
      right++; 
    } else {
      left++; 
    }
    if (left == right) {
      max = Math.max(max, 2 * left); // 2*right个
    } else if (left > right) {
      left = right = 0;
    }
  }
  return max;
};

console.log(longestValidParentheses(")()()()))())(()))()()(("));
