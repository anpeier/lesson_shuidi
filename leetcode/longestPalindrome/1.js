// 给定一个包含大写字母和小写字母的字符串，
// 找到通过这些字母构造成的最长的回文串。
// 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
// 注意:
// 假设字符串的长度不会超过 1010。
// 示例 1:
// 输入:
// "abccccdd"
// 输出:
// 7
var longestPalindrome = function(s) {
    var countObj = {};
    var res = 0;//最大
    for(var i=0;i<s.length;i++){
        if(!countObj[s[i]]){
            countObj[s[i]] = 1;
        }else{
            res +=2; 
            delete countObj[s[i]];
        }
    }
    if(s.length > res){ //剩余存在奇个数字符
        res +=1;
    }
    return res;
};
console.log(longestPalindrome("acccc"));
