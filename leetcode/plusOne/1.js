// 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。
// 示例 1:
// 输入: [1,2,3]
// 输出: [1,2,4]
// 解释: 输入数组表示数字 123。

// var plusOne = function(digits) {
//     let len = digits.length
//     for (let i = len-1; i >=0 ; i--) {
//         let num = digits[i] + 1
//         if(num == 10){
//             digits[i] = 0
//         }else{
//             digits[i] += 1
//             break;
//         }
//     }
//     if(digits[0] == 0) digits.unshift(1)
//     return digits
// };

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const len = digits.length;
    for(let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if(digits[i]!=0)
            return digits;
    }
    digits = [...Array(len + 1)].map(_=>0);;
    digits[0] = 1;
    return digits;
};

console.log(plusOne([1, 9, 9]));
