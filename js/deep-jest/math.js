function add(a, b) {
  return a + b;
}
function min(a, b) {
  return a - b;
}
function mixin(obj1, obj2) {
  return {
    ...obj1,
    ...obj2,
  };
}

// let expect = 10;
// let res = add(7, 3);
// if (expect !== res) {
//   throw new Error("add 出错");
// }
function should(result) {
  return {
    equal: function (expect) {
      if (result !== expect) {
        throw new Error("出错");
      }
    },
  };
}
function it(desc, fn) {
  try {
    fn();
    console.log(`√:${desc} pass`);
  } catch (error) {
    console.log(`X:${desc} fail`);
  }
}
// 哪一项不通过
// 后面无法进行
it("test add", () => {
  should(add(7, 3)).equal(10);
});
it("test min", () => {
  should(min(7, 3)).equal(4);
});
it("test minix", () => {
  let obj1 = mixin({ a: 1 }, { b: 2 });
  should(obj).equal({ a: 1, b: 2 });
});
