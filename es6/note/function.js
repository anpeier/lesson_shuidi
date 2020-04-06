// 函数的扩展

// 1.默认值
// es6之前
function log(x, y) {
  y = y || "World";
  console.log(x, y);
}
log("Hello"); // Hello World
log("Hello", "China"); // Hello China
log("Hello", ""); // Hello World
// 缺点 y赋值了但为false 则赋值无效 解决：
// if (typeof y === 'undefined') {
//   y = 'World';
// }

// es6
function log(x, y = "World") {
  console.log("es6");
  console.log(x, y);
}

log("Hello"); // Hello World
log("Hello", "China"); // Hello China
log("Hello", ""); // Hello

function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

const p = new Point();
console.log(p); // Point { x: 0, y: 0 }

// 使用参数默认值时，函数不能有同名参数。
// 不报错
function foo(x, x, y) {
  // ...
}
// 报错
// function foo(x, x, y = 1) {
//   // ...
// }

// 参数默认值是惰性求值的
let x = 99;
function foo(p = x + 1) {
  console.log(p);
}
foo(); // 100
x = 100;
foo(); // 101

// 可以与解构赋值的默认值，结合起来使用
function foo2({ x, y = 5 }) {
  console.log(x, y);
}

foo2({}); // undefined 5
foo2({ x: 1 }); // 1 5
foo2({ x: 1, y: 2 }); // 1 2
// foo2() // TypeError: Cannot read property 'x' of undefined

// 写法一
function m1({ x = 0, y = 0 } = {}) {
  return [x, y];
}
// 写法二
function m2({ x, y } = { x: 0, y: 0 }) {
  return [x, y];
}
// 区别
// 写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；
// 写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。
// 函数没有参数的情况
m1(); // [0, 0]
m2(); // [0, 0]

// x 和 y 都有值的情况
m1({ x: 3, y: 8 }); // [3, 8]
m2({ x: 3, y: 8 }); // [3, 8]

// x 有值，y 无值的情况
m1({ x: 3 }); // [3, 0]
m2({ x: 3 }); // [3, undefined]

// x 和 y 都无值的情况
m1({}); // [0, 0];
m2({}); // [undefined, undefined]

m1({ z: 3 }); // [0, 0]
m2({ z: 3 }); // [undefined, undefined]

// 如果是非尾部参数设置默认值，则参数不能省略，会报错
// 可以用undefined代替 null不能替代
function f(x = 1, y) {
  return [x, y];
}
f(2); // [2, undefined]
// f(, 1) // 报错
f(undefined, 1); // [1, 1]

function foo3(x = 5, y = 6) {
  console.log(x, y);
}
foo3(undefined, null);
// 5 null

// 函数的length属性返回的是没有指定默认值的参数个数
function foo4(a) {}
console.log(foo4.length); // 1
function foo5(a = 2) {}
console.log(foo5.length); // 0

// 作用域
// 设置了参数的默认值，函数进行声明初始化时，会形成单独的作用域

var x2 = 1;
function f2(y = x2) {
  let x2 = 2;
  console.log(y);
}
f2() // 1
// 解释
// 函数f2调用时，参数y = x形成一个单独的作用域。这个作用域里面，
// 变量x本身没有定义，所以指向外层的全局变量x。函数调用时，
// 函数体内部的局部变量x影响不到默认值变量x。

var x3 = 1;
function foo5(x3, y = function() { x3 = 2; }) {
  var x3 = 3;
  y();
  console.log(x3);
}
foo5() // 3
console.log(x3) // 1
// 函数foo的参数形成一个单独作用域。这个作用域里面，
// 首先声明了变量x，然后声明了变量y，y的默认值是一个匿名函数。
// 这个匿名函数内部的变量x，指向同一个作用域的第一个参数x。
// 函数foo内部又声明了一个内部变量x，该变量与第一个参数x由于
// 不是同一个作用域，所以不是同一个变量，因此执行y后，
// 内部变量x和外部全局变量x的值都没变。
// 如果将var x = 3的var去除，函数foo的内部变量x就指向第一个参数x，
// 与匿名函数内部的x是一致的，所以最后输出的就是2，
// 而外层的全局变量x依然不受影响

// 2.rest参数
// 形式：...变量名

// rest 参数之后不能再有其他参数，否则报错
// 报错
// function f(a, ...b, c) {
//   // ...
// }

// 函数的length属性，不包括 rest 参数

// 例子
// arguments变量的写法
function sortNumbers() {
  return Array.prototype.slice.call(arguments).sort();
}
// rest参数的写法
const sortNumbers2 = (...numbers) => numbers.sort();

// 3.严格模式
// ES5：函数内部可以设定为严格模式。
// es6：
// 函数参数使用了默认值、解构赋值、或者扩展运算符，
// 那么函数内部就不能显式设定为严格模式，否则会报错。
// 规避：
    // 1.设置全局的严格模式
    // 2.把函数包在无参的IIFE里

// 4. 箭头函数
// 注意点：
    // 1.函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
    // 2.不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
    // 3.不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
    // 4.不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
// 箭头函数转成 ES5 的代码如下：
// ES6
function foo6() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}
// ES5
function foo7() {
  var _this = this;
  setTimeout(function () {
    console.log('id:', _this.id);
  }, 100);
}

function foo8() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}
var f = foo8.call({id: 1});
var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1
// 原因：箭头函数没有自己的this，他们都指向最外层的foo8的this
// 不适合场景：
    // 1.定义对象的方法
    const cat = {
        lives: 9,
        jumps: () => {
            this.lives--;
        }
    }
// 对象不构成单独的作用域，导致jumps箭头函数定义时的作用域是全局作用域。
    // 2.动态需要this的场合
    // var button = document.getElementById('press');
    // button.addEventListener('click', () => {
    //   this.classList.toggle('on');
    // });
// button的监听函数是一个箭头函数，导致里面的this是全局对象。
// 如果改成普通函数，this就会动态指向被点击的按钮对象。

// 5.尾调用
    // 指某个函数的最后一步是调用另一个函数。

// 6.尾递归
// 斐波那契数列
// 1.非尾递归
function Fibonacci (n) {
  if ( n <= 1 ) {return 1};

  return Fibonacci(n - 1) + Fibonacci(n - 2);
}
// Fibonacci(10) // 89
// Fibonacci(100) // 超时
// Fibonacci(500) // 超时
// 2.尾递归
function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}
Fibonacci2(100) // 573147844013817200000
Fibonacci2(1000) // 7.0330367711422765e+208
Fibonacci2(10000) // Infinity