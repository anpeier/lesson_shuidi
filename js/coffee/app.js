//咖啡和茶的基类

function Beverage(){

}

Beverage.prototype.boilWater = function (){
    console.log('把水煮沸');
}
Beverage.prototype.brew = function(){
    //空着
}
Beverage.prototype.pourInCup = function(){}
Beverage.prototype.addCondiments = function(){}
Beverage.prototype.make = function(){
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
}

var Coffee = function(){

}
//继承Beverage
Coffee.prototype = new Beverage();
Coffee.prototype.brew = function(){
    console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pourInCup = function(){
    console.log('把咖啡倒进杯子');
}
Coffee.prototype.addCondiments = function(){
    console.log('加糖和牛奶');
}
var coffee = new Coffee();
coffee.make();