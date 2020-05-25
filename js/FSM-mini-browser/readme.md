## CORS

响应头

- Access-Control-Allow-Origin: Origin | \*
- Access-Control-Expose-Headers
  让服务器把允许浏览器访问的头放入白名单
- Access-Control-Max-Age
  指定了 预检(preflight) 请求的结果能够被缓存多久
- Access-Control-Allow-Credentials
  指定了当浏览器的 credentials 设置为 true 时是否允许浏览器读取 response 的内容
- Access-Control-Allow-Methods
  指明了实际请求所允许使用的 HTTP 方法
- Access-Control-Allow-Headers
  指明了实际请求中允许携带的首部字段

## JSONP
1. 流程
2. 封装成Promise
3. JSONP 后端返回的是什么