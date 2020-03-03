// var reverseOnlyLetters = function(S) {
//   var p = /[a-zA-Z]/i;
//   var str = S.split('')
//   let p1 = 0;
//   let p2 = S.length - 1;
//   let temp = "";
//   while(p1<p2){
//     if (p.test(str[p1]) && p.test(str[p2])) {
//       temp = S[p1];
//       str[p1] = str[p2];
//       str[p2] = temp;
//       p1++;
//       p2--;
//     } else if (!p.test(str[p1])) {
//       p1++;
//     } else if(!p.test(str[p2])){
//       p2--;
//     }
//   }
//   return str.join('');
// };

var reverseOnlyLetters = function(S) {
  var arr = S.match(/[a-zA-Z]/g)
  console.log(arr)
  if (arr === null) return S
  return S.replace(/[a-zA-Z]/g, () => arr.pop())
}

console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));

// console.log(p.test("0"))
