// 罗马数字转整数
// var romanToInt = function(s) {
//     let map = new Map()
//     map.set('I',1)
//     map.set('V',5)
//     map.set('X',10)
//     map.set('L',50)
//     map.set('C',100)
//     map.set('D',500)
//     map.set('M',1000)
//     len = s.length,sum = 0
//     for (let i = 0; i < len; ) {
//         if(map.get(s[i]) >= map.get(s[i+1]) || !s[i+1]) {
//             sum += map.get(s[i])
//             // console.log(map.get(s[i]))
//             i++
//         }else{
//             console.log(sum)
//             sum += map.get(s[i+1]) - map.get(s[i])
//             i+=2
//         }
//     }
//     return sum
// };

var romanToInt = function(s) {
    const map = {
        I : 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };
    len = s.length,sum = 0
    for (let i = 0; i < len; ) {
        if(map[s[i]] >= map[s[i+1]] || !s[i+1]) {
            sum += map[s[i]]
            // console.log(map.get(s[i]))
            i++
        }else{
            console.log(sum)
            sum += map[s[i+1]] - map[s[i]]
            i+=2
        }
    }
    return sum
};
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))