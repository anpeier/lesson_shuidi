// MVVM 数据劫持

var arr = [1];
arr[10000] = 1;
// arr V8存储  对象
// 容器 v8数字索引，字符串索引
// function a() {
//   console.time();
//   for (let i = 0; i < arr.length; i++) {
//     console.log(1);
//   }
//   console.timeEnd();
// }
// a()

// function b() {
//   console.time()
//   arr.forEach(item => console.log(item))
//   console.timeEnd()
// }
// b()

// 对数组进行数据劫持
// Vue defineProperty 不支持数组的代理
// defineProperty 可以对数组进行数据劫持，不过对新增数据项无效
var arr = [1, 2, 3, 4];
arr.forEach((item, index) => {
  // 对每一个属性进行单独的数据劫持，get，set
  Object.defineProperty(arr, index, {
    set: function (val) {
      console.log('set');
      item = val;
    },
    get: function () {
      console.log("get");
      return item;
    },
  });
});

arr[1] = 10
arr.push(5)
// 1. 尝试让Vue 支持数组的mvvm能力