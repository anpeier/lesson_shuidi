// function test(callback) {
//   setTimeout(() => {
//     callback("hello,word", new Error("出错"));
//   }, 2000);
// }

// test(function (str, err) {
//   console.log(str);
// });

Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i]));
  }
  return arr;
};

Array.prototype.myMap1 = function (cb) {
  return this.reduce((acc, cur) => {
    let res = cb(cur);
    return acc.concat(res);
  }, []);
};

let arr = [{ age: 20 }, { age: 40 }, { age: 60 }];
const newArr1 = arr.myMap1((e) => {
  return {
    ...e,
    age: e.age * 2,
  };
});
console.log(newArr1);

let sum = arr.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);
console.log(sum);
