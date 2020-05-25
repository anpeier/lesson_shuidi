let css = require("css");
const match = require("./match");
const fs = require("fs");
const layout = require("./layout");
const render = require("./render");
const images = require("images");
let htmlStr = `<html>
<head>
    <style>
    #myid{
      width:500px;
      display: flex;
      background-color: rgb(0, 0, 255);
      align-items: center;
      justify-content: center;
      height: 500px;
    }
    .main {
      width: 200px;
      height: 100px;
      background-color: rgb(255, 0, 0);
    }
    .side {
      width: 200px;
      height: 200px;
      background-color: rgb(0, 255, 0);
    }
    </style>
</head>
<body>
    <div id="myid">
      <div class="main"></div>
      <div class="side"></div>
    </div>
</body>
</html>
`;
// 词法分析：
// 分词
// DOM树 节点有 类型
// { type: element, tagName: 'html', tag: 'startTag'}
// { type: element, tagName: 'html', tag: 'endTag'}
// 语法分析：html 配对， js 编程语言（LL, LR）  // 栈来完成
//
// startTag push
// end  栈顶元素 [ length -  1] 和 自己标签名一样 配对 ? pop
// CSS 树
// 所有的css规则 遇到style link @import 添加进来
let rules = [];
function addCssrule(text) {
  let ast = css.parse(text);
  rules.push(...ast.stylesheet.rules);
}
function computerCss(element) {
  if (!element.computerStyle) {
    element.computerStyle = {};
  }
  let elements = stack.slice(0).reverse();
  for (const rule of rules) {
    // 从后往前
    let selectorParts = rule.selectors[0].split(" ").reverse();
    if (!match(element, selectorParts[0])) {
      continue;
    }
    // body div #myid
    // element 的 父级
    let j = 1;
    for (let i = 0; i < elements.length; i++) {
      if (match(elements[i], selectorParts[j])) {
        j++;
      }
    }
    // 所有选择器遍历完成
    if (j >= selectorParts.length) {
      // "computerStyle": {
      //   "width": {
      //     "value": "100px"
      //   },
      //   "background-color": {
      //     "value": "#fff"
      //   }
      // }
      let computerStyle = element.computerStyle;
      for (const declaration of rule.declarations) {
        let { property, value } = declaration;
        if (!computerStyle[property]) {
          computerStyle[property] = {};
        }
        computerStyle[property].value = value;
      }
    }
  }
}
let currentToken = null;
let currentTextNode = null;
let currentAttribuate = null;
let stack = [{ type: "document", children: [] }];
function parse(string) {
  let state = start;
  for (let c of string) {
    // \n
    state = state(c);
  }
}
parse(htmlStr);
function start(c) {
  if (c === "<") {
    return tagOpen;
  } else {
    // 只有在 emit 方便拿到该文本节点的 parent
    // 在 emit top 元素 就是 parent
    // top.children
    emit({
      type: "text",
      content: c,
    });
    return start;
  }
}
function tagOpen(c) {
  if (c === "/") {
    // </h 结束标签
    return endTagOpen;
  } else if (c.match(/^[a-zA-Z]$/)) {
    // <h  开始标签 去拼接
    currentToken = {
      type: "element",
      tag: "startTag",
      attributes: [],
      tagName: c,
    };
    return tagName;
  }
}
function tagName(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken.tagName += c;
    //
    return tagName;
    // 什么时候拼接完？？
  } else if (c === ">") {
    // 提交 当前 token
    emit(currentToken);
    return start;
    // 之前：<div></div>
    // 现在的：<div           id="myid"></div>
  } else if (c.match(/^[\n\f\t ]$/)) {
    return beforeAttribuate;
  }
}
// <div        id="myid">
function beforeAttribuate(c) {
  if (c.match(/^[\n\f\t ]$/)) {
    return beforeAttribuate;
  } else if (c.match(/^[a-zA-Z]$/)) {
    currentAttribuate = {
      name: c,
      value: "",
    };
    return attribuateName;
  } else if (c === ">") {
    emit(currentToken);
    return start;
  }
}
function attribuateName(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentAttribuate.name += c;
    return attribuateName;
  } else if (c === "=") {
    return attribuateValue;
  }
}
// >
// attribuateValue('>')
function attribuateValue(c) {
  if (c === '"' || c === '"') {
    // ""
    return attribuateValue;
  } else if (c.match(/^[a-zA-Z]$/)) {
    currentAttribuate.value += c;
    return attribuateValue;
  } else {
    // c 丢了
    currentToken.attributes.push(currentAttribuate);
    currentAttribuate = null;
    return beforeAttribuate(c);
  }
}
function endTagOpen(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: "element",
      tag: "endTag",
      attribuates: [],
      tagName: c,
    };
    // 也要拼接
    return tagName;
  }
}
let dom = stack[0];
const viewport = images(800, 600);
render(viewport, dom);
viewport.save("render.jpg");
fs.writeFileSync("./dom.json", JSON.stringify(stack, null, 2));
function emit(token) {
  console.log(token);
  let top = stack[stack.length - 1];
  if (token.tag === "startTag") {
    let element = {
      type: "element",
      children: [],
      attributes: token.attributes,
      tagName: token.tagName,
    };
    // 得到一个element 该element css 计算
    computerCss(element);
    // 当前 element 一定是栈顶的 子元素
    top.children.push(element);
    stack.push(element);
    currentTextNode = null;
  } else if (token.tag === "endTag") {
    if (top.tagName === token.tagName) {
      currentTextNode = null;
      if (top.tagName === "style") {
        addCssrule(top.children[0].content);
      }
      // layout 这一步 依赖子元素信息
      layout(top);
      stack.pop();
    } else {
      throw new Error("no match");
    }
  } else if (token.type === "text") {
    if (currentTextNode === null) {
      currentTextNode = {
        type: "text",
        content: "",
      };
      top.children.push(currentTextNode);
    }
    currentTextNode.content += token.content;
  }
}
