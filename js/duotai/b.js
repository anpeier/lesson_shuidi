var makeSound = function (animal) {
    // 多态 只要对象具有统一的接口,那么可以互换使用
    // if(animal instanceof Duck) {
    //     console.log('嘎嘎嘎');
    // }else if (animal instanceof Chicken) {
    //     console.log('咯咯咯');
    // }
    animal.say(); // 面向对象的优化
}
var Duck = function () {};
Duck.prototype.say = function() {
    console.log('嘎嘎嘎');
}
var Chicken = function() {};
Chicken.prototype.say = function() {
    console.log('咯咯咯');
}
makeSound(new Chicken());