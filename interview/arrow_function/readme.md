# 箭头函数很简便 功能也被简化了
1. this 没有
    简约 缺了很多东西

- super 关键字 应用场景？
    super 继承关系
    class Person {
      constructor() {
        super()
      }
    }
    函数的 super arguments this
    class super 用法
    别的可能性让js函数 实现super使用

    对象间继承关系的新方法 Object.setPrototypeOf(childObject, fatherObject)
    - 函数 this arguments super

2. 'super' keyword unexpected here 箭头函数没用super 关键字
3. 箭头函数不适合用来做构造函数 不能new

js 一切皆对象
  对象 函数 区分：
    对象有__proto__属性 原型对象
    函数 prototype
    生成对象时， 对象的__proto__属性指向函数的prototype属性

4. 箭头函数不能被new 