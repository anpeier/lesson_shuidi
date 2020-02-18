var s1 = 'get-element-by-id';

// 编写一个函数  getElementById   codewars 
var f = function(s) {
  // reaplce  /-[a-w]/ ''
  // 正则， 匹配规则
  return s.replace(/-\w/g, function(x) {
    // console.log(x)
    // - 不要  把第二个字符变大写
    // return x.charAt(1).toUpperCase();
    return x.slice(1).toUpperCase();
  })
 }

 console.log(f(s1));
