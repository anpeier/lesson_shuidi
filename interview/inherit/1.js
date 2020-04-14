// 1.原型链继承
function Parent() {
  this.name = "kevin";
}
Parent.prototype.getName = function () {
  console.log(this.name);
};
function Child() {}
Child.prototype = new Parent();
var child1 = new Child();
console.log(child1.getName()); // kevin
// 问题
//    1.引用类型的属性被所有实例共享，举个例子
//    2.在创建 Child 的实例时，不能向Parent传参



// 2.经典继承
function Parent() {
  this.names = ["kevin", "daisy"];
}
function Child() {
  Parent.call(this);
}
var child1 = new Child();
child1.names.push("yayu");
console.log(child1.names); // ["kevin", "daisy", "yayu"]
var child2 = new Child();
console.log(child2.names); // ["kevin", "daisy"]
// 问题:
//     方法都在构造函数中定义，每次创建实例都会创建一遍方法。



// 3.组合继承
function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
Parent.prototype.getName = function () {
  console.log(this.name);
};
function Child(name, age) {
  Parent.call(this, name);

  this.age = age;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
var child1 = new Child("kevin", "18");
child1.colors.push("black");

console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

var child2 = new Child("daisy", "20");
console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]



// 寄生组合继承
function Parent(name) {
    this.name = [name]
}
Parent.prototype.getName = function() {
    return this.name
}
function Child() {
    // 构造函数继承
    Parent.call(this, 'zhangsan') 
}
//原型链继承
// Child.prototype = new Parent()
Child.prototype = Object.create(Parent.prototype)  //将`指向父类实例`改为`指向父类原型`
Child.prototype.constructor = Child

//测试
const child = new Child()
const parent = new Parent()
child.getName()                  // ['zhangsan']
parent.getName()                 // 报错, 找不到getName()
