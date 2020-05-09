// TDD 测试驱动开发
// 敏捷开发 ts
// 先写测试代码，再写实现代码

// 待测试代码是否正确
const EasyDate = require("../../src/EasyDate");
const should = require("should"); // 断言库
describe("想要测试Date合格", () => {
  // 添加测试用例
  let date = new EasyDate("+1d");
  it("测试实例日期", () => {
    // 测试 生成一个日期
    // 写测试代码 用上src下的代码，测试你未来写的代码是否正确
    // date.getFullYear()
    let some = date.toDate();
    let today = new Date();
    should(some.getFullYear()).equal(today.getFullYear());
    // should(some.getMonth()).equal(today.getMonth() + 1);
    should(some.getDate()).equal(today.getDate() + 1);
  });

  describe("判断闰年", () => {
    it("是否为闰年", () => {
      should(EasyDate.isLeapYear(2000)).be.True();
    });
  });

  describe("月份", () => {
    it("输出月份，个位数前面自动补0", () => {
      should(EasyDate.toDouble(11)).equal("11");
      should(EasyDate.toDouble(9)).equal("09");
    });
  });
});
