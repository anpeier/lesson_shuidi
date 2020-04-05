// 标签模板
let a = 5;
let b = 10;

// 第一个参数是没有变量替换的部分的数组
// 变量替换存在第一个和第二个成员，第二个和第三个成员...之间
function tag(strArr, ...value) {
  console.log(strArr[0]);
  let sum = value.reduce((s, curVal, curIndex) => {
    console.log(curIndex, curVal);
    return s + curVal;
  }, 1); // 初始值 sum = 66
  console.log(sum);
}
tag`Hello ${a + b} world ${a * b}`;
// 等同于
tag(["Hello ", " world ", ""], 15, 50);

let total = 30;
let msg = passthru`The total is ${total} (${total * 1.05} with tax)`;
// function passthru(literals) {
//   let result = "";
//   let i = 0;
//   console.log(literals)
//   console.log(arguments)
//   while (i < literals.length) {
//     result += literals[i++];
//     if (i < arguments.length) {
//       result += arguments[i];
//     }
//   }
//   return result;
// }

function passthru(literals, ...values) {
  let output = "";
  let index;
  for (index = 0; index < values.length; index++) {
    output += literals[index] + values[index];
  }

  output += literals[index];
  return output;
}
console.log(msg); // "The total is 30 (31.5 with tax)"

//应用 过滤 HTML 字符串，防止用户输入恶意内容

function SaferHTML(templateData) {
  let s = templateData[0];
  for (let i = 1; i < arguments.length; i++) {
    let arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}
let sender = '<script>alert("abc")</script>'; // 恶意代码
let message = SaferHTML`<p>${sender} has sent you a message.</p>`;

console.log(message)
// i18n`Welcome to ${siteName}, you are visitor number ${visitorNumber}!`

let s = "𠮷";

console.log(s.length)
console.log(s.charAt(0)) // ''
console.log(s.charAt(1))
console.log(s.charCodeAt(0)) // 55362
console.log(s.charCodeAt(1)) // 57271

let s2 = '𠮷a';

console.log(s2.codePointAt(0)) // 134071
console.log(s2.codePointAt(1)) // 57271

console.log(s2.codePointAt(2)) // 97

// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。

let s3 = 'Hello world!';

s3.startsWith('Hello') // true
s3.endsWith('!') // true
s3.includes('o') // true

// 这三个方法都支持第二个参数，表示开始搜索的位置。
let s4 = 'Hello world!';
s4.startsWith('world', 6) // true
s4.endsWith('Hello', 5) // true // 第二个参数表示前n个字符
s4.includes('Hello', 6) // false

// repeat() 方法 
// 该方法返回一个新字符串，表示将原字符串重复n次