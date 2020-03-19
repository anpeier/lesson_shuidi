// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:
// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:
// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:
// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

// var lengthOfLongestSubstring = function(s) {
//   if(s.length == 1) return 1
//   let res = 0,p=0,temp=""
//   for (let i = 0, len = s.length; i < len; i++) {
//     res = Math.max(res,i-p)
//     if (temp.indexOf(s[i]) == -1) {
//       temp += s[i];
//     } else {
//       cur = 0
//       p += temp.indexOf(s[i])
//       temp = s.substring(p,i)
//       p++
//       console.log(p,i,res,temp)
//     }
//   }
//   return res > temp.length ? res : temp.length;
// };

var lengthOfLongestSubstring = function(s) {
    let windows = {};
    let res = 0;
    let left = 0,right = 0;
    while(right < s.length){
        let c1 = s[right];
        windows[c1] != undefined ? windows[c1]++ : windows[c1] = 1;
        right++;
        while(windows[c1] > 1){
            let c2 = s[left];
            windows[c2]--;
            left++;
        }
        res = Math.max(res,right - left);
    }
    return res;
};
// console.log(lengthOfLongestSubstring("abcdaabxvcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("aabaab!bb"));
