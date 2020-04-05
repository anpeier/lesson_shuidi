中间件  

node   POST  /posts {title, body:}  文章 
RESTFUL 新增文章
登录  
未登录， 直接访问  /posts   -> /login

1. 陈方闻
  路由守卫 vue router   beforeEach  前端的  单页应用 路由系统
  axios 拦截所有的请求 /posts /admin /api  配置
  后端怎么做   koa  express  http 请求头  POST /posts
  html/json  后端也有跳转  http  304  /login  路由系统
  ctx.redirect('/login')  // 304

-  node 的框架 以中间件（函数） 来构成web服务， 为用户访问提供服务 是 node 开发的核心
-  好多个的， 访问顺序 
  洋葱一样 一层层  提前退出 
  每个用户访问 req  http://localhost:3000/ 
  很多很多层 去提供中间的状态的服务 
  用中间件去服务 res 

- 中间件的洋葱模型
  一层一层已理解 (ctx.body res.json)
  出来了， 栈数据结构  简单的数组

- 中间件你是怎么用的， 觉得对他深入理解了
  比如我在发文章前， check 登录， 不用写道
  posts/ 中间件中， 而独立的放到 auth 健全中间
  件函数中， 单独编写， 分离到middlewares 目录
  node 架构中从此多了一个middlewares 层
