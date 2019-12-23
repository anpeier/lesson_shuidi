function Person(name, age) {
    this.name = name;
    this.age = age;
}
// 覆盖了 Object 上原有的toString方法
Person.prototype.toString = function () {
    return 'I am a Person, my name is ' + this.name;
}

function Man(name, age) {
    // Person 构造函数 把父类的构造函数执行一下
    Person.apply(this, arguments);
    console.log(arguments);
}
Man.prototype = Object.create(Person.prototype);
var xiaoan = new Man('xiaoan', 20);
console.log(xiaoan + "");
// toString 覆盖
Man.prototype.toString = function() {
    return 'I am a Man, my name is ' + this.name;
}
console.log(xiaoan + "");

// var person = new Person('xiaoan', 20);
// console.log(person + ""); // 类型转化
// const arr = ['xiaoan', 'sunny'];
// console.log(arr + ""); //Object
// console.log(Object.prototype.toString.call(arr).slice(8,-1)); // [object Array]
