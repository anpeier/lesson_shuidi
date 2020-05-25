// 创建一个空的简单JavaScript对象（即{}）；
// 链接该对象（即设置该对象的构造函数）到另一个对象 ；
// 将步骤1新创建的对象作为this的上下文 ；
// 如果该函数没有返回对象，则返回this。

function myNew(fn, ...arg) {
  let obj = {};
  Object.setPrototypeOf(obj, fn.prototype);
  fn.call(obj, ...arg);
  return obj;
}

function Func1(name) {
  this.name = name;
}
var f1 = myNew(Func1);
console.log(f1 instanceof Func1);
