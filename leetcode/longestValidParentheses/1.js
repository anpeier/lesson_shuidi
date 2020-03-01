var longestValidParentheses = function(s) {
  var max = 0;
  if (s.length <= 1) {
    return max;
  }
  var len = s.length;
  var stack = [];
  for (let i = 0; i < len; i++) {
    var tMax = 0;
    for (let j = i; j < len; j++) {
      if (s[j] == "(") {
        stack.push("(");
      } else if (s[j] == ")") {
        if (stack.length < 1) {
          max = max < tMax ? tMax : max;
          break;
        } else {
          stack.pop();
          tMax += 2;
          max = max < tMax ? tMax : max;
        }
      }
    }
    if (stack.length === 0) {
      max = max < tMax ? tMax : max;
    }
    if (stack.length !== 0) {
      max = tMax - max;
    }
    stack = [];
  }
  return max;
};

console.log(longestValidParentheses(")()())()()(("));
console.log(longestValidParentheses("()((())("));
console.log(longestValidParentheses(")(((((()())()()))()(()))"));
