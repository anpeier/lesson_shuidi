function myIntanceof(L, R) {
  let LL = L.prototype;
  let RR = R.prototype;
  while (1) {
    if (LL == null) return false;
    if (LL === RR) return true;
    LL = LL.__proto__;
  }
}
function Foo() {
}

console.log(new String('111') instanceof String) // true
console.log(Function instanceof Function) // true
console.log(Function instanceof Object) // true
console.log(Foo instanceof Foo) // false
console.log(Foo instanceof Object) // true
console.log(Foo instanceof Function) // true
