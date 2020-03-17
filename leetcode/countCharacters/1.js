// 1160 拼写单词
// 给你一份『词汇表』（字符串数组） words 
// 和一张『字母表』（字符串） chars。
// 假如你可以用 chars 中的『字母』（字符）拼写出 words 中的
// 某个『单词』（字符串），那么我们就认为你掌握了这个单词。
// 注意：每次拼写时，chars 中的每个字母都只能用一次。
// 返回词汇表 words 中你掌握的所有单词的 长度之和。 
// 示例 1：
// 输入：words = ["cat","bt","hat","tree"], chars = "atach"
// 输出：6
// 解释： 
// 可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
// 示例 2：
// 输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// 输出：10
// 解释：
// 可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。
// var countCharacters = function(words, chars) {
//     let res = 0
//     let len = words.length;
//     for (let i = 0; i < len; i++) {
//         let str = chars
//         for (let j = 0; j < words[i].length;j++) {
//             let cur = str.indexOf(words[i][j])
//             if(cur != -1){
//                 str = str.slice(0,cur) + str.slice(cur+1)
//             }else{
//                 break
//             }
//             if(j == words[i].length - 1){
//                 res += j+1
//             }
//         }
//     }
//     return res
// };

// hash
var countCharacters = function(words, chars) {
    let map =  new Map()
    let cnt = 0
    for (let c of chars) {
        map.set(c,map.has(c)? map.get(c)+1:1)
    }
    for (let w of words) {
        if (check(w, new Map(map))) { // 复制一份map
            cnt += w.length
        }
    }
    return cnt

};
function check(w, map) {
    for (let i of w) {
        if (map.has(i) && map.get(i)>0){ // 检查字母是否在map中
            map.set(i, map.get(i) - 1) // map中该字母的数量减一
        }else{
            return false
        }
    }
    return true
}

console.log(countCharacters(["cat","bt","hat","tree"],"atach"))
console.log(countCharacters(["hello","world","leetcode"],"welldonehoneyr"))