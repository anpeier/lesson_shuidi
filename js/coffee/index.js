// 1.构建coffee类
// js 面向对象比较特别
var Coffee = function (){ // 匿名函数 值是函数
    console.log("朕要的咖啡");
} 
Coffee.prototype.boilWater = function(){
    console.log('把水煮沸');
}
Coffee.prototype.brewCoffeeGriends = function(){
    console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pourInCup = function(){
    console.log('把咖啡倒进杯子');
}
//在类的原型上添加一个方法
Coffee.prototype.addSugarAndMilk = function(){
    console.log('加糖喝牛奶');
}

var coffee = new Coffee();
coffee.boilWater();
coffee.brewCoffeeGriends();
coffee.pourInCup();
coffee.addSugarAndMilk();
function Tea (){//茶类

}
const tea = new Tea(); 