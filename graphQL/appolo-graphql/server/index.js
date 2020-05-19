const Koa = require("koa");
const { ApolloServer, gql } = require("apollo-server-koa");
const cors = require("@koa/cors");
const { readFile } = require("./utils/index");
// 前端的gql查询，不再是restful
const typeDefs = gql`
  type TodoItem {
    id: ID
    content: String
    checked: Boolean
  }
  type Query {
    TodoList: [TodoItem!]
  }
`;

const resolvers = {
  Query: {
    TodoList: async () => {
      const data = await readFile("./mock/index.json");
      const todoList = JSON.parse(data);
      return todoList;
    },
  },
};
// apollo grahql 的封装
const server = new ApolloServer({
  typeDefs, //query
  resolvers,
});

const app = new Koa();
server.applyMiddleware({ app });
app.use(cors());
app.listen(3001);
