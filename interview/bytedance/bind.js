const sum = (a, b, c) => {
  return a + b + c;
};
console.log(sum(10, 10, 10));
// 参数不够 1个参数
let sum10 = sum.bind(null, 10);
// 接着传剩下的两个，什么能够传参？？ => 返回一个函数给你，
// 你继续传在这个函数里面
console.log(sum10(20, 30));
//
Function.prototype.myBind = function(thisObj, ...arg1) {
  // fn/this 上面 其实可能有个 .prototype 的对象
  let fn = this;
  function innerFunc(...arg2) {
    const args = arg1.concat(arg2);
    // this
    // 因为 this 没有绑定到 cat 上面，并没有做优先级的处理
    // 判断 是不是 this 调用？？ .target
    let isNewCall = this instanceof innerFunc;
    // isNewCall ? 实例 : thisObj
    return fn.call(isNewCall ? this : thisObj, ...args);
  }
  innerFunc.prototype = fn.prototype;
  // say 方法吗？？？
  return innerFunc;
};
function Animal(name, color) {
  this.name = name;
  this.color = color;
}
Animal.prototype.say = function() {
  return `I'm a ${this.color} ${this.name}`;
};
const Cat = Animal.myBind(null, "cat");
// 由一个方法(这个方法上面可能存在 .prototype 的对象) 调用 bind  -> 经过 bind 处理，处理完返回一个方法  ->
// -> 返回一个方法,把原来可能存在的  .prototype 的对象 弄丢了
// Cat 哪里来的？？
// 答：由 myBind 生成的，你调用了 myBind 我给你返回的
// 我给你返回了 innerFunc
// 最终：Cat 哪里来的？？就是 Cat === innerFunc
//
const cat = new Cat("white");
// new innerFunc()
// innerFunc 没有 prototype
// cat
// .say 找不到 那个方法
// cat = {}
console.log(cat, cat.say());
if (
  cat.say() === "I'm a white cat" &&
  cat instanceof Cat &&
  cat instanceof Animal
) {
  console.log("success");
}

function Fooo() {
  // this === bbbb
  // bbbb instanceof Fooo // true
  // this instanceof Fooo // true
  this.a = 123;
}
let bbbb = new Fooo();
