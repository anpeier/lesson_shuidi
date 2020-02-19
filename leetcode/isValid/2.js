// 空间复杂度 O(1)
var isValid = function (str) {
    if (!str || str.length < 1) {
        return true
    }
    if (str[0] == ')') return false
    var sum = 0
    for (let i = 0, len = str.length; i < len; i++) {
        var c = str[i]
        if (c == '(') {
            sum++
        }else {
            if (sum == 0) {
                return false
            }else {
                sum--
            }
        }
    }
    return sum==0?true:false
}

console.log(isValid(")"))