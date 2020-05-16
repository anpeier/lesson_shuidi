// private 类内使用
// protected 类内及继承的子类使用
// public 类内及类外使用

// class Person {
//   private name: string;
//   public sayHi() {
//     this.name
//     console.log("hi");
//   }
// }

// const person = new Person();
// // person.name = "lap";
// // console.log(person.name);
// person.sayHi()

// class Person {
//   // 简化语法
//   constructor(public name: string){}
//   // 传统语法
//   // name:string;
//   // constructor(name:string){
//   //   this.name= name
//   // }
// }
// const person = new Person("lap");
// console.log(person.name);

// getter setter
// class Person{
//   constructor(private _name:string){}
//   get name(){
//     return this._name
//   }
//   set name(name:string){
//     this._name = name
//   }
// }

// const person = new Person('lap')
// console.log(person.name)
// person.name = 'aaa'

// 单例模式
// class Demo {
//   private static instance: Demo;
//   private constructor(public name: string) {}
//   static getInstance() {
//     if (!this.instance) {
//       this.instance = new Demo("lap");
//     }
//     return this.instance;
//   }
// }
// const demo1 = Demo.getInstance();
// const demo2 = Demo.getInstance();
// console.log(demo1.name);
// console.log(demo2.name);
