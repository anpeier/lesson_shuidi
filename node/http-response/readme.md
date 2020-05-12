## 编译原理

代码: 字符串
电脑运行
```js
let codeString = `const http = require('http');`
let cal = `123 + 456 * 789`
function run(codeString) {
  // 1: 词法分析，分词
  // 一段解析 分析为 一个个合法的词(token)
  // 词：const  http  =   require()

  // 传入一个 合法四则运算(字符串形式)
  // cal 结果
  // 0 ~ 1
  // 123  + 456 * 789

  // server -> <h2 class="title" data-id="1" > title </h2>
  // DOM 树解析
  // h2 class = title data-id 1 title

  // 2：语法分析
  // 3：AST
}
```

## 客户端
ajax: Xmlhttprequest
fetch: 

超文本传输协议：html css js 超：视频 音频


http1.1: 文本 是有个格式 （报文格式）



服务端给你返回的：
状态码
响应头
响应体

### code
```js
const xhr = new XMLHttprequest()
xhr.open("POST", url, true);
xhr.setRequest('content-type', 'x-www-form-urlencoded')
xhr.send('keywords=js')

xhr
```

### 浏览器
拼接报文

```js
POST url http1.1
content-type: x-www-form-urlencoded
user-agent: ''

keywords=js

```

```js
POST url http1.1
content-type: x-www-form-urlencoded
user-agent: ''

ok

```

## 'Transfer-Encoding': 'chunked'
```js
没有 chunked
HTTP/1.1 200 OK
Date: Mon, 11 May 2020 12:52:48 GMT
Connection: keep-alive

ok

```

```js
浏览器得到 响应报文：
HTTP/1.1 200 OK
Date: Mon, 11 May 2020 12:52:48 GMT
Connection: keep-alive

10： 长度
1234567890
9：
123456789
0

// 后面没内容了
```



