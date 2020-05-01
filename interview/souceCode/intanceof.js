function myIntanceof(L, R) {
  let LL = L.prototype;
  let RR = R.prototype;
  while (1) {
    if (R == null) return false;
    if (L === R) return true;
    L = L.__proto__;
  }
}
function Foo() {
}

console.log(Function instanceof Object) // true
Function instanceof Function // true
Function instanceof Object // true
Foo instanceof Foo // false
Foo instanceof Object // true
Foo instanceof Function // true
