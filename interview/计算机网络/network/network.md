- web 交互的数据格式是什么？有没有方法 在用户请求时提供多种数据返回格式的选择？
  Ajax json/html
  传统老浏览器 text/html
  动态web ajax text/json
  mvc mvvm 请求头的分析
- 计算机网络这块的知识
  1. 为什么http createServer callback req + res 表达出来呢？
    浏览器n和服务器1之间的通信 HTTP协议
    HTTP协议构建与TCP/IP协议之上的 网络应用层协议
HTTP/0.9 1991年 学术交流 网络之间传输HTML 超文本内容 请求响应的模式
    TCP 安全连接管道
      - HTTP基于TCP协议 客户端 IP（dns domain），端口
        三次握手 建立连接
          双方都具有发送和接收数据包的能力 ACK SYN
          1. browser 同步位：SYN=1 序号：seq=x SYN_SENT状态 等待同步序列序号
          2. SYN=1 确认号：ACK=1 ack=x+1 seq=y
          3. browser establised ACK=1 ack=y+1 seq=x+1
        四次挥手 断开连接
        dns 递归的查找过程
          浏览器缓存 -> host 文件 -> 运营商 -> ... ->美国
    0.9 版本 连请求头请求体都没有
1.0 版本 1994 支持多文件下载 text/html(0.9版本)  image/png text/css text/js
    accept: text/html
    accept-encoding:gzip
    accept-charset:utf-8y
    accept-language: zh_CN
    请求头 POST
    状态码
    Cache 机制 Last-Modify
    useAgent ？ 有什么用 ？ 判断用户的浏览器类型 业务开发很重要：
    - 通过这个标识，用户所访问的网站可以显示不同的排版从而为用户提供更好的体验或者进行信息统计 PC/mobile iPhone/Android 手机网站
    - logs日志处理 阿里下单

1.1 版本
  2. 在哪个版本HTTP支持 png的解析
  3. 雪碧图 http 请求，合并到一张背景图上，前端性能优化技术，为什么现在不问，哪个http版本
  4. userAgent 在哪个版本出现
  5. 哪个版本极大的提升了下载速度