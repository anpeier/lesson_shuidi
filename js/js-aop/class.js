// Array.isArray            // static    
// Array.prototype.push     // 
function isAnimal(target) {
  // 1: 原始的 target => 原始的类
  console.log(target);
  // 2：修改 原始的类
  // 没有对 target  造成破坏  target = class Cat{}
  target.isAnimal = function() {
    console.log('yes');
  }
  
  // 
  // return target;
}
function isThing(target) {
  console.log(target);
  target.isThing = function() {
    console.log('yes');
  }
  // return target;
}
function listenCall(target, name, descriptor) {
  // 1： 拿到原始的 work  descriptor.value
  // descriptor.value = function work(params) {
    
  // }
  const origin = descriptor.value;
  // 2: 修改
  // work say
  descriptor.value = function() {
    console.log('我监听到你发生调用')
    origin();
  }
}
@isThing
@isAnimal
class Man {
  static isMan() {
    console.log('yes')
  }
  // 侵入式修改
  // static isAnimal() {}
  @listenCall
  say() {
    // console.log('我监听到你发生调用')
    console.log('i say');
  }
  // 监听一下 work 有没有调用
  @listenCall
  work() {
    // 侵入式修改
    // console.log('我监听到你发生调用')
    console.log('i am working');
  }
}
// 没有 @isAnimal，增加 static isAnimal
// 类 属性 方法
// 实例化
let boy = new Man();
boy.say()
Man.isMan();
Man.isAnimal();
Man.isThing();
boy.work();

/**
 * @connect(mapDispatch, mapState)(Header)
 * class Header extends Component {
 *  
 * }
 * export default Header
 */