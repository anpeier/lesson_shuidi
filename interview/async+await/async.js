// 重点
// async await 只是写法上看起来同步
(async function () {
  // await 后面 接 promise ？？？
  // 接 promise 才能够保证 顺序
  let c = await p;
  let d = await p2;
  let f = await 789;
  console.log(c);
})();

// 怎么 保证 p resolve 后面代码才会执行
// 都用 Promise.resolve 包装一层 不用判断 await、yield 后面 到底是 promise（有 then方法）还是非 promise（没有 then方法）
Promise.resolve(p).then(() => {
  Promise.resolve(p2).then(() => {
    Promise.resolve(789).then(() => {
      console.log(c);
    });
  });
});

// 下一个 yield(g.next()) 挪到 then 回调里
// promise.then(() => {
//   g.next();
// });
