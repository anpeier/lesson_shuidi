// 151. 翻转字符串里的单词
// 给定一个字符串，逐个翻转字符串中的每个单词。
// 示例 1：
// 输入: "the sky is blue"
// 输出: "blue is sky the"
// 示例 2：
// 输入: "  hello world!  "
// 输出: "world! hello"
// 解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
// 示例 3：
// 输入: "a good   example"
// 输出: "example good a"
// 解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

var reverseWords = function (s) {
  let res = "";
  return s
    .split(" ")
    .reverse()
    .filter((item) => item)
    .join(" ");
};

//一、正则
// var reverseWords = (s) => {
//   return s.trim().replace(/\s+/g, " ").split(" ").reverse().join(" ");
// };

var reverseWords = function (s) {
  let list = [],
    str = "",
    resStr = "";
  s += " "; // 加个空格 防止最后一个不是空格的情况, 确保循环到最后能把最后一个加到数组中, 省得再在下面判断
  for (let i = 0; i < s.length; i++) {
    s[i] !== " " ? (str += s[i]) : str && (list.push(str), (str = ""));
  }
  for (let j = list.length - 1; j >= 0; j--) {
    resStr += j !== 0 ? list[j] + " " : list[j];
  }
  return resStr;
};

console.log(reverseWords("the  sky is blue"));
