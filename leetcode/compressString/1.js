// 字符串压缩。利用字符重复出现的次数，编写一种方法，
// 实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。
// 若“压缩”后的字符串没有变短，则返回原先的字符串。
// 你可以假设字符串中只包含大小写英文字母（a至z）。
// 示例1:
//  输入："aabcccccaaa"
//  输出："a2b1c5a3"
// 示例2:
//  输入："abbccd"
//  输出："abbccd"
//  解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。
// var compressString = function(S) {
//     let res = "",len = S.length,count = 1;
//     for (let i = 0; i < len; i++) {
//         if(S[i] == res[res.length-1]){
//             count++
//         }else{
//             res += S[i]
//         }
//         if(S[i+1] != S[i]){
//             res += count
//             count = 1
//         }
//     }
//     return res.length < len ? res : S
// };

/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {

    let res = "", i = j = 0 
    while (j < S.length - 1) {
        if (S[j] !== S[j + 1]) {
            res += S[i] + (j - i + 1)
            i = j + 1
        }
        j++
    }

    res += S[i] + (j - i + 1)
    return res.length < S.length ? res : S
};

console.log(compressString("aabcccccaaa"))
console.log(compressString("abbccd"))