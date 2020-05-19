// 新的接口
import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema"; // 模型定义文件

const app = express();
// 数据一定是从数据库里来的
// req -> graphql -> db

// 数据playground 启动了graphql服务
app.use(
  "/graphql",
  graphqlHTTP({
    // 在前端也有像mongodb schema 严格约定接口
    schema,
    graphiql: true,
  })
);

app.listen(8080);
