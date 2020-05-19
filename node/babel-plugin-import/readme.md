## babel
parse -> transform -> generate
```js
<div>
  <p></p>
</div>
```
- 解析：code -> AST
  - 词法分析：状态机，源码解析为一个个token:div p
  - 语法分析：html 父子关系
  - AST

数字：
```js
var a = 123;
```

transform babel 