# meterial design 来自Google的 UI风格

从 css 风格 -> 组件化 -> react 入门

波浪的感觉？
css 思路
- meterial design 的灵魂 在于对交互的创新
  波浪感 进度条的进度感
  移动端细节 cursor: pointer 用的是非button 组件
  user-select: none;
  stylus 嵌入式 ::after :active::after

1. background-image
    背景图片 url 引入的方式 在移动时代 渐变也可生成
    既生成了背景 同时又没有图片
    10%白 1%的透明
    transform: scale(12) 12 -> 0

- 我们需要准备一堆的按钮
    为开发准备好基础组件 小程序里用的组件
    要用到的按钮 这里都会有
    提供 通用的，变通的，各种常见要求的(70%的业务开发) 就叫组件
    自己写下这个组件 以后用就好 复用
    css 有些变化(状态， primary circle block) 如何封装这些进去
    与html区别
        1. 把它的样式封装进去
        button 样式是样式
        组件(组合html,css,js)成为一个组件
- ReactDOM React 跟DOM交互的库
    基本语法：
    组件是强大的，定义了一个Button组件
    type 文字 block ...有通用性的需求
    1. ReactDOM.render(
            <div>
              <Button>default</Button>
            </div> ,
            document.getElementById('root')
        )
        JSX 语法
        才可以在root里面显示组件