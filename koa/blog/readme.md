koa 是node的轻量级开发框架

comment create table
id 
name 用户名称
content
moment 评论时间
postid 文件id
avatar 用户头像

CREATE TABLE comment (
    id INT(5) auto_increment primary key,
    name VARCHAR(20) UNIQUE NOT NULL,
    content TEXT,
    moment DATE,
    postid INT(8),
    avatar VARCHAR(100)
)

- mvc
    routers 一个模块一个文化