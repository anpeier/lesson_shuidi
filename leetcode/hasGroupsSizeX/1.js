// 914.卡牌分组
// 给定一副牌，每张牌上都写着一个整数。
// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。
// 示例 1：
// 输入：[1,2,3,4,4,3,2,1]
// 输出：true
// 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
// 示例 2：
// 输入：[1,1,1,2,2,2,3,3]
// 输出：false
// 解释：没有满足要求的分组。

// 最大公约数计算公式
// 辗转相除法是以除数和余数反复做除法运算，当余数为 0 时，
// 取当前算式除数为最大公约数的计算公式。如下：
// 1997 / 615 = 3 (余 152)
// 615 / 152 = 4(余7)
// 152 / 7 = 21(余5)
// 7 / 5 = 1 (余2)
// 5 / 2 = 2 (余1)
// 2 / 1 = 2 (余0)
// 至此，最大公约数为1。
// function gcd(num1, num2) {
//     // 利用辗转相除法来计算最大公约数
//     return num2 === 0 ? num1 : gcd(num2, num1 % num2);
// }

var hasGroupsSizeX = function(deck) {
  // 相同牌出现次数Map
  let timeMap = new Map();

  function gcd(num1, num2) {
    // 利用辗转相除法来计算最大公约数
    return num2 === 0 ? num1 : gcd(num2, num1 % num2);
  }
  // 遍历牌
  deck.forEach(num => {
    // 统计每张牌出现的次数
    timeMap.set(num, timeMap.has(num) ? timeMap.get(num) + 1 : 1);
  });
  // Map.protype.values()返回的是一个新的Iterator对象，所以可以使用扩展运算符(...)来构造成数组
  let timeAry = [...timeMap.values()];

  /*
    最大公约数
    因为该数组是出现次数数组，最小值至少为1（至少出现1次），所以默认赋值为数组首位对公约数计算无干扰
    */
  let g = timeAry[0];

  // 遍历出现次数，计算最大公约数
  timeAry.forEach(time => {
    // 因为需要比较所有牌出现次数的最大公约数，故需要一个中间值
    g = gcd(g, time);
  });

  // 判断是否满足题意
  return g >= 2;
};
console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2]));
