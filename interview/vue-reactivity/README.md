```js
data() {
  return {
    name: 'name',
    sex: 'sex',
    age: 12
  }
}
data1() {
  return {
  }
}
```
1. {{ observerData.name }}  取值，触发一次 `get`
2. 已经事先通过 Proxy 代理了 get 这个行为，所以我们是知道有get这个行为发生
   1. 进行 依赖收集
   2. 收集完成的依赖：
   ```js
   { 
     data: {
       name: [], sex: [], age: [] 
      }, 
     data1 {}, 
     data2: {}
   }
   ```
3. 后续 用户触发了 observerData.name = 'new name'
   1. 已经事先通过 Proxy 代理了 set 这个行为,
   2. target key
   3. key 发生变化了，哪些地方需要更新 => dep[target][key], 重新执行，