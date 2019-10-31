- 浏览器端的JS  最大的Boss是window   
  BOM BrowserObjectModel 浏览器对象模型
Dom
   bonus 声明在全局范围内
   window.bonus  卫星
   ......对全局变量的污染问题


- JS的编写，其实应该在页面加载之后，JS只有在html，css加载完成后 ，再去运行，生命周期 window.onload
- window.onload 的执行函数 内部创建一个局部的作用域
  bonus 函数不会污染全局作用域 window
- 如果有了新的type后，你怎么改这个函数
- 把事情做复杂了？把switch case，拆成多个函数来做
   技术大牛，做大项目   设计模式:策略模式
   发工资，策略 复杂，
   - 随意加新的等级
   - 将策略细节隐去
