@annotation
class MyClass {
}

function annotation(target) {
  target.annotated = true 
  // 装饰MyClass类拥有annotated属性
}

console.log(MyClass.annotated);