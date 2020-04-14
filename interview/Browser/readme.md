# 从输入 URL 到页面展示，这中间发生了什么？

1. 多进程架构
2. IPC(Inter-Process Communication)进程间通信

3. 注重细节
4. 了解 v8 引擎及浏览器架构
5. 全面考察前端是否具有完整计算机本科学习能力的代表题
   web 开发 网络 操作系统
6. 如何规范回答
   有条理，进程

7. 浏览器 proxy 通过浏览器来代理我们访问网页
   可以当成搜索框，输入 url，浏览器会自动补全协议
8. 浏览器 操作系统里面的进程
   shift + esc 查看
   细化流程
   web 访问浏览器 多进程的架构模式 最流畅 耗费更多内存
   打开一个页面 至少四个进程
   主进程 管家 chrome 浏览器
   <!-- - 子进程：
       GPU进程  GPU加速  3d 渲染 canvas three.js transform 3d
       network Service -->
   chrome 多进程带来现代浏览器的快速访问体验 chrome 是代表
   - 浏览器主进程 可以并发
     启动浏览器 提供的交互（输入 url） 子进程管理（进程间通信）
     文件存储功能: 文件缓存 cookie localStorage...
     BOM Browser Object Model
   - 网络进程 提供下载功能
   - 渲染进程 html css js 图等静态资源 解析成可交互页面
     执行过程
     访问过程 执行流程 进程间的流程
     1. 浏览器进程收到用户输入的 URL 请求时 在主进程 IPC 将 url 交给网络进程
     2. 网络进程发起 URL 请求 url 请求是由 c++模块提供
        2.1 request
        2.2 response
     3. 网络进程响应头数据, (头 + body) 通知渲染进程开始准备渲染
        text/html text/json image/jpg/webp/Apng 提前通知渲染？-> 浏览器进程 提交导航消息(CommitNavigation) 到渲染进程
        网络协议 TCP/IP HTTP
        1. DNS 解析 DNS 服务器 Domain Domian name
           Server domain -> ip
     4. 渲染进程收到提交导航消息后 开始准备接收 html 直接和网络进程建立数据通道
     5. 渲染进程会向浏览器发送 "确认提交" ，准备好接收和解析页面数据
     6. 在当前标签页则移除之前的页面 body 到了 渲染进程渲染 页面的重绘和重排 提交
        确定文档消息
        标签页
