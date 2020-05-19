## 


- 看下这个url设计科学吗  文章posts  查看某一篇文章  /postsow/1
  RESTFul  url里不要有动词
  不科学   /posts/1
  因为 RESTFUL  它是后端暴露资源的解决方案， 多年来一直受追捧
  URL 设计之美
  1. HTTP动词
    GET/POST/DELETE/PATCH/PUT
  2. 每一个URL 代表一种资源 /posts/1  名词
  3. 客户端通过http动词， 对服务器资源进行操作，实现表现层状态转化
    设计一个URL  网上汇款，从账户1向账户2汇款500元？ URL？
    /account/1/transfer/500/2   transfer 动词
    /transaction  交易 -> website 独立模块  http1.1
    POST  状态转化  from=1&to=2&mount=500.00  req body

- 不过， 在近几年来，RESTFUL， 被前端新的理念革命了，GraphlQL, 让前端更好的使用及定义数据接口 swagger API 文档， Apollo 不浪费数据， 数据格式更加严谨

  restful 谓语动词 受后端控制大
  vuex -> GraphQL(api) -> mockjs -> server RESTFUL
  GraphQL 让前端对数据接口拥有了更大的话语权

  QL queryLanguage

