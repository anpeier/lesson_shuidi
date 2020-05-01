- Hash
  原理：基于 location.hash 来实现
  URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送。
  hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此能通过浏览器的回退、前进按钮控制hash 的切换。
  可以使用 hashchange 事件来监听 hash 的变化。
