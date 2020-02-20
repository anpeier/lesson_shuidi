var longestValidParentheses = function (s) {
    var max = 0
    if (s.length <= 1) {
        return max
    }
    var stack = [-1]
    for (let i = 0, len = s.length; i < len; i++) {
        if(s[i] == '(') {
            stack.push(i)
        } else {
            stack.pop()
            if(stack.length < 1) {
                stack.push(i)
            } else {
                max = Math.max(max, i - stack[stack.length - 1])
            }
        }
    }
    return max
}

console.log(longestValidParentheses(")()())()()(("))
console.log(longestValidParentheses("()((())("))
console.log(longestValidParentheses(")(((((()())()()))()(()))"))