## BEM

## css-module vs scope

scope: .vue 组件处理了 css 模块化
解决命名冲突

```css
css 模块化
@import
```

```js
loader: 'css-loader',
options: {
  modules: {
    mode: 'local',
    exportGlobals: true,
    localIdentName: '[hash:base64]',
    hashPrefix: 'my-custom-hash',
  },
}
```

## js in css === css Houdini

css 标准
why css houdini：css 浏览器标准实现太慢了
flex：2009

```js
js: import('./a.js')
还没纳入 js 标准，babel 复杂编译
```

less sass stylus: 预处理器
postCss:后处理器
css pollyfill 做不了的原因
**js 在网页绘制过程中，所能触及的地方很有限**

- **window event loop**
- worker event loop

```js
new Worker("./xxx.js");
```

- worklet event loop

```js
CSS.paintWorklet.addModule("./xxx.js");
```
