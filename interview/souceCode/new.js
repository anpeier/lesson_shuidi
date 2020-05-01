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
