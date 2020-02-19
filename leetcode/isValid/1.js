var isValid = function (str) {
    if (str.length < 1 || !str) return true
    if (str.length % 2 !=0 || str[0] == ')' || str[0] == '}' || str[0] == ']' ) return false
    let stack = []
    var obj = {
        "[": "]",
        "{": "}",
        "(": ")",
    }
    for (let i = 0, len = str.length; i < len; i++) {
        let s = str[i]
        if (s == '(' || s == '[' || s == '{') {
            stack.push(s)
        }else {
            let cur = stack.pop()
            if (obj[cur] != s) {
                return false
            }
        }
    }
    if (!stack.length) {
        return true
    }
    return false
}

console.log(isValid("(]"))