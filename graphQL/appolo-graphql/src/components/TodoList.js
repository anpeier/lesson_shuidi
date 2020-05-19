import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

// 前端定义他要的接口是什么 前端决定权
const QUERY_TODO = gql`
  {
    TodoList {
      content
      id
      checked
    }
  }
`;

const TodoList = () => (
  <Query query={QUERY_TODO}>
    {({ loading, error, data }) => {
      if (loading) return <p>loading</p>;
      if (error) return <p>error...</p>;
      return data.TodoList.map(
        (item) => `
      <li>${item.id}</li>
    `
      );
    }}
  </Query>
);

export default TodoList;
