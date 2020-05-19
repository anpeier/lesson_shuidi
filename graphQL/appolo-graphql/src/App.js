import React from "react";
import "./App.css";
import { Card } from "antd";
import "antd/dist/antd.css";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import TodoList from "./components/TodoList";
// Apollo 是graphql框架

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql", // 来自于服务器端
});
function App() {
  return (
    <ApolloProvider client={client}>
      <TodoList/>
      <Card style={{ width: "600px", margin: "100px auto" }}>
        <h1>GraphQL demo</h1>
      </Card>
    </ApolloProvider>
  );
}

export default App;
