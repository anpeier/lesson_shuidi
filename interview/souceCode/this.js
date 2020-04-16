function Page() {
  console.log(this);
  // 1： create {}
  // 2： {} 继承 自 Page.prototype
  //  3： this === {}
  //  4：看 Page 返回一个对象 ？ 返回的对象就是 new 的结果 ： 返回 {}
  return this.hosts;
}
Page.hosts = ["h11111"];
Page.prototype.hosts = ["h22222"];

var p1 = new Page();
var p2 = Page();

console.log(p1);
// console.log(p2);


var name = 'foo';
function showName() {
    console.log(name); // 按代码书写的位置查找
}
function changeName() {
    var name = 'BigBear';
    showName();
}
changeName();