// vuex
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from "graphql";
import axios from "axios";
const API_BASE = "http://localhost:3300";
const PostType = new GraphQLObjectType({
  name: "Post",
  fields: {
    id: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
  },
});
// mongodb schema 定义数据的规则
const QueryRootType = new GraphQLObjectType({
  name: "QueryRoot",
  fields: {
    greeting: {
      type: GraphQLString,
      // ？暗示了什么？ 上接Vue接口需要，下接数据真实请求
      resolve: () => `hello ~`,
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: () => {
        return axios.get(`${API_BASE}/posts`).then((res) => res.data);
      },
    },
  },
});

export default new GraphQLSchema({
  query: QueryRootType,
});
