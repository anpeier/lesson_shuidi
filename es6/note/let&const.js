// ES6 的块级作用域必须有大括号，如果没有大括号，
// JavaScript 引擎就认为不存在块级作用域
if (true) let x = 1; // 报错
if (true) { // 不报错
    let x = 1;
}

//避免在块级作用域内声明函数。
// 如果确实需要，也应该写成函数表达式，而不是函数声明语句
// 块级作用域内部，优先使用函数表达式
{
  let a = 'secret';
  let f = function () {
    return a;
  };
}

// const 本质
// const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存
// 的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量
// 指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），
// 变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的
// （即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。
// 因此，将一个对象声明为常量必须非常小心。

const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
// 上面代码中，常量foo储存的是一个地址，这个地址指向一个对象。不可变的只是这个地址，
// 即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。

// 对象冻结应该使用Object.freeze
const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;

// 彻底将对象本身冻结
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};

// 顶层对象的属性
// 顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象。
// ES5 之中，顶层对象的属性与全局变量是等价的。
// ES6规定：
//     var命令和function命令声明的全局变量，依旧是顶层对象的属性；
//     另一方面规定，let命令、const命令、class命令声明的全局变量，
//     不属于顶层对象的属性。
//     从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。

var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a // 1

let b = 1;
window.b // undefined

// 顶层对象在各种环境实现
    // 浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
    // 浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
    // Node 里面，顶层对象是global，但其他环境都不支持。
// ES2020 引入globalThis作为顶层对象。也就是说，任何环境下，
// globalThis都是存在的，都可以从它拿到顶层对象，指向全局环境下的this。
// 垫片库global-this模拟了这个提案，可以在所有环境拿到globalThis。