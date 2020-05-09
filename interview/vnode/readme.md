JS 原生 基础能力 内功

- Virtual DOM Babel AST 抽象语法树？

<div id="root">
  <span class="demo">
    This is a span.
  </span>
  <p>DOM</p>
</div>
JSON =>
{
  tag: 'div',  /*标签*/
  attrs: {   /*标签上的所有属性 封装*/  
    id: 'root'
  },
  children: [ 
    {
      tag: 'span',
      attrs: {
        className: 'demo'
      },
      children: [
        {
          tag: undefined,
          text: 'DOM'
        }
      ]
    },
    {
      tag: 'p',
      children: [
        {
          tag: undefined,
          text: 'DOM'
        }
      ]
    }
  ]
}
