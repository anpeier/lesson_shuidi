// function foo() {
//   console.log("foo");
// }
// var foo;
// console.log(foo); // [Function: foo]

// function foo() {
//   console.log("foo");
// }
// var foo = 1;
// console.log(foo); // 1
// console.log(3**3)
// var data = [];

// for (var i = 0; i < 3; i++) {
//   data[i] = (function (i) {
//         return function(){
//             console.log(i);
//         }
//   })(i);
// }

// data[0]();
// data[1]();
// data[2]();

// function A(name) {
//   this.name = name;
// }
// A.prototype.log = function () {
//   setInterval(() => {
//     console.log(this.name)
//   }, 2000);
// };

// const a = new A('sss')
// a.log()