// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
// 示例 1:
// 输入: ["flower","flow","flight"]
// 输出: "fl"
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return ""
    let res = strs[0],flag = false
    if(strs.length == 1) return res
    len = strs.length;  
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < strs[i].length; j++) {
            if(strs[i][j] != res[j]){
                res = res.slice(0,j)
                flag = true
                break
            }
        }
        if(!flag) res = strs[i]
    }
    return res
};
console.log(longestCommonPrefix(["aa","a"]))
console.log(longestCommonPrefix(["flower","flow","flight"]))