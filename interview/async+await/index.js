let p2 = Promise.resolve(1);
let p = new Promise((resolve) => {
  setTimeout(() => {
    resolve(234);
  }, 2000);
});
function* test() {
  let a = yield p;
  console.log(a);
  let b = yield p2;
  console.log(b);
}

// 执行generator且保证顺序
function asyncTogenerator(gen) {
  let g = gen();
  function step(value) {
    // 处理yield的返回值
    let info = g.next(value);
    if (info.done) {
      return;
    } else {
      // 把yield后面的东西(info.value)之间resolve
      Promise.resolve(info.value).then((res) => {
        // 下一个yield 递归
        step(res);
      });
    }
  }
  step();
}

asyncTogenerator(test);
