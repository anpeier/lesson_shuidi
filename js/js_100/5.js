// 下面代码中a在什么情况下打印1？4
// == 隐式类型转换

// 1.
// let a = [1, 2, 3];
// a.toString = a.shift;

// 2. valueOf
// var a = {
//   i:1,
//   valueOf() {
//     return a.i++
//   }
// }

// 3. toString()
// var a = {
//   i: 1,
//   toString() {
//     return a.i++;
//   },
// };

// 4. generator
let a = {
  gn: (function* () {
    yield 1;
    yield 2;
    yield 3;
  })(),
  valueOf() {
    return this.gn.next().value;
  },
};
if (a == 1 && a == 2 && a == 3) {
  console.log(1);
}
