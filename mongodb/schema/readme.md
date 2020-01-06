schema 数据结构的描述和定义
- articles?
    用户的文章
    MySQL: 关系型数据库
      user id
      articles user_id
      1对多
    mongodb: nosql数据库
      基于文档 doc
- mongodb Schema
  很灵活，不需要定义
  我们给了Schema定义
- mongodb 用的是js语法引擎
  mysql 语法很严格
- mongoose 连接数据库 -> Schema定义数据库模型 -> model -> 数据库物理层到面向对象的能力 -> save