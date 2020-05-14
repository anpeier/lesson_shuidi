## 性能优化
- http://www.baidu.com 发生什么？
  全站启用https
  状态码 ？
  304 缓存
  301 永久重定向
  302 临时重定向
    GET
    POST -> 降级为 GET
  307 临时重定向
    POST 不能 变为 GET
- 点击a标签  不跳转怎么做？
  prevent  
  2xx 
  204 No Content 
  205 Reset Content 不返回内容，但要求重置文档 表单不要多次提交
  206 Partial Content 大文件上传或多文件上传或断点续传
  1xx 目前正常 客户端可以继续发送请求或忽略这个响应
  101 Switching Protocols HTTP 升级为 webSocket 时使用
  3xx 
  301 永久跳转 域名废弃，老用户从老域名出来
  302 临时跳转
  304 Not Modified 
    If-Modified-Since
    If-None-Match

  400 Bad Request 报文纯在错误
  401 Unauthorized 未认证
  403 Forbidden
  404
  405 Method Not Allow
  408 Request Timeout
  409 Conflict 请求冲突
  413 Request Entity Too Large 请求头数据过大
  414 Request-URI Too Long 请求URL过长
  429 Too Many Requests 客户端发送请求过多
  431 Request Header Fields Too Large 请求头的字段内容过大

  5xx
  501 Not Implemented 服务器不支持当前请求所需要的某个功能
  502 Bad Gateway 服务器尝试执行请求时，从上游服务器接收到无效的响应
  503 Service Unavailable 服务器忙

  - js
    - eval with 都不要用
      eval 可以把任何的js 文本运行起来 特别消耗性能 
      安全问题
        cookie 可能有用户身份信息，eval js cookie ajax 发给黑客服务器，拿到用户cookie
        解决方案：
          1. httpOnly 核心的cookie加上httpOnly
          2. 用户输入，前后端转义 encodeURIComponent
    - 加载顺序
      css head 尽快看到页面
      script 阻塞？ defer  <script src='' defer>
        js 动态代码 动态操作DOM 下载且执行完毕
      下载，放在 body 尾部 阻塞
      CSS 雪碧图 http 请求少 缺点是第一次下载慢，不好维护，css难写 css background-position
      iconfont 为什么不会影响性能 cdn
      背景图 直接img src="" 增加了http请求，webpack打包为了base64 如果有请求，http协议更新了 对他的支持

  - JS requestAnimationFrame