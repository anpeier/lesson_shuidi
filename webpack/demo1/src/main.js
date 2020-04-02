// webpack 怎么在js文件里处理css文件
const css = require("css-loader!./index.css");
// css 属性节点
// dom node 节点 tree 再使用css {width: , height:,...}
// 图片 二进制形式引入
const a = 100;
// console.log(a)
console.log(a, css);
