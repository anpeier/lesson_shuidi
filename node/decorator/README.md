1. table 删除前要注意 提醒
2. 阿里的面试题   es7 decorator 特性 
装饰器
  ES7 中的 decorator 同样借鉴了python的语法，
  接收一个参数：被装饰的目标方法，处理完扩展的内容以后再返回一个方法，
  供以后调用，同时也失去了对原方法对象的访问
  不过依赖于 ES5 的 Object.defineProperty 方法 
  Object.defineProperty()方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 
  并返回这个对象。
  1. 类的装饰
    - 装饰器是一个对类进行处理的函数。装饰器函数的第一个参数，就是所要装饰的目标类。
        @testable
        class MyTestableClass {
        // ...
        }
        function testable(target) {
        target.isTestable = true;
        }
        MyTestableClass.isTestable // true
    - 装饰器 testable 可以接受参数，相当于可以修改装饰器的行为
        function testable(isTestable) {
        return function(target) {
            target.isTestable = isTestable;
        }
        }

        @testable(true)
        class MyTestableClass {}
        MyTestableClass.isTestable // true

        @testable(false)
        class MyClass {}
        MyClass.isTestable // false
    - 装饰器对类的行为的改变，是代码编译时发生的，而不是在运行时
      本质是编译时执行的函数
  2. 方法的装饰
    - 可以装饰类的属性
        class Person {
            @readonly
            name() { return `${this.first} ${this.last}` }
        }

        function readonly(target, name, descriptor){
        // descriptor对象原来的值如下
        // {
        //   value: specifiedFunction,
        //   enumerable: false,
        //   configurable: true,
        //   writable: true
        // };
        descriptor.writable = false;
        return descriptor;
        }

        readonly(Person.prototype, 'name', descriptor);
        // 类似于
        Object.defineProperty(Person.prototype, 'name', descriptor);
        
        - 接受三个参数。
            装饰器第一个参数是 类的原型对象，上例是 Person.prototype，装饰器的本意是要“装饰”类的实例，但是这个时候实例还没生成，所以只能去装饰原型（这不同于类的装饰，那种情况时target参数指的是类本身）；
            第二个参数是 所要装饰的属性名
            第三个参数是 该属性的描述对象
  3. 函数方法的装饰
        装饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。
        如果一定要装饰函数，可以采用高阶函数的形式直接执行。
        function doSomething(name) {
        console.log('Hello, ' + name);
        }

        function loggingDecorator(wrapped) {
        return function() {
            console.log('Starting');
            const result = wrapped.apply(this, arguments);
            console.log('Finished');
            return result;
        }
        }

        const wrapped = loggingDecorator(doSomething);
  4. 使用场景
    - 起注释的作用
        @testable
        class Person {
        @readonly
        @nonenumerable
        name() { return `${this.first} ${this.last}` }
        }
    - 新功能提醒或权限
    - loading
  5. 几个常见的装饰器
        autobind 装饰器使得方法中的this对象，绑定原始对象。
        @readonly
        readonly 装饰器使得属性或方法不可写。
        @override
        override 装饰器检查子类的方法，是否正确覆盖了父类的同名方法，如果不正确会报错。
        deprecate 或 deprecated 装饰器在控制台显示一条警告，表示该方法将废除。
        @suppressWarnings