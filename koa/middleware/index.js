const app = require('./app');

app.use((next) => {
  console.log(1) // 执行
  next();
  console.log(2)
})

app.use((next) => {
  console.log(3) // 执行
  next();
  console.log(4)
})

app.use((next) => {
  console.log(5) // 执行
  next();
  console.log(6)
})

app.compose();