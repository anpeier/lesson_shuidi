const app = { // app
  // 顺序执行, 栈， 空的， 
  // 每一项是函数
  middlewares: []
}

// use 函数， middlewares push 
app.use = function(fn) {
  // console.log(typeof fn);
  if (typeof fn !== 'function') {
    throw new Error('中间件一定是函数');
  }
  app.middlewares.push(fn);
}
// ctx req + res
// 合并
// 中间件最后会合并成一个大函数 
app.compose = function() {
  // console.log('-----------compose');
  function dispatch(idx) {
    if (idx === app.middlewares.length) return;
    const fn = app.middlewares[idx]; 
    //当前的中间件
    // console.log(fn);
    fn(function next() {
      dispatch(idx+1)
    });
  }
  
  dispatch(0)
  // 执行第一个
  // 由第一个， 决定next 
  // yield 异步问题
  // for (let i = 0; i < this.middlewares.length;
  //    i++) {
  //   this.middlewares[i]();
  // }
  // 未免太顺了 next
  // 不能用for 循环， 怎么实现串行执行？
}

module.exports = app;