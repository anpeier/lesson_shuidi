## Error: Can not find plugin egg-cors 

![image-20200507170746942](.\assets\image-20200507170746942.png)



### 错误原因

这个错误是因为没有安装 `egg-cors`

### 解决办法

```shell
# npm i egg-cors --save
```



## return new _GraphQLError.GraphQLError("Syntax Error: ".concat(description), undefined, source, [position]);

![image-20200507171046978](.\assets\image-20200507171046978.png)



### 错误原因

这个错误是因为 `@switchdog/egg-graphql` 这个插件需要一个实例



### 解决办法

先创建这个目录结构

![image-20200507171433225](.\assets\image-20200507171433225.png)

> 文件内容请查阅小册



## Error: "Query" defined in resolvers, but not in schema

![image-20200507171755509](.\assets\image-20200507171755509.png)



### 错误原因

未定义查询

### 解决办法

在 `hello/schema.graphql` 文件中定义查询

```scheme
type Hello {
  id: ID!
  name: String!
}

type Query {
  hellos: [Hello!]
}
```

或者可以抽离出来，新建 `query/schema.graphql`

```scheme
type Query {
  hellos: [Hello!]
}
```

