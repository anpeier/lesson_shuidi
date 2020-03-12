// 对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，
// 我们才认定 “T 能除尽 S”。
// 返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。
// 示例 1：
// 输入：str1 = "ABCABC", str2 = "ABC"
// 输出："ABC"

// 辗转相除法
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) return ''
  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b))
  return str1.substring(0, gcd(str1.length, str2.length))
};
console.log(gcdOfStrings("ABABAB","ABAB"))