- npm init -y 项目的初始化
    Java 一样来做后端 企业级开发框架
    npm init egg --type=simple

- app
    node 应用程序 主要代码
- config 配置文件夹
- test 测试目录

- egg 架构
    脚手架快速构建项目结构
    web http协议
    router.js 配置了路由 -> controller (ctx.request.body) -> model

- npm i sequelize-cli -D
    -D? devDependencies 
    开发阶段的依赖 mysql 的处理
    创建表
    执行sql查询
    sequelize-cli command-line 命令行

- sequelize 命令行集锦
    sequelize init 初始化mysql的工作目录
        - config.json
    sequelize db:create
    创建一个表