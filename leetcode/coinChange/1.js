给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

示例 1:

输入: coins = [1, 2, 5], amount = 11
输出: 3 
解释: 11 = 5 + 5 + 1

示例 2:

输入: coins = [2], amount = 3
输出: -1

// 错的
// var coinChange = function(coins, amount) {
//   var sort_coins = coins.sort((a,b) => {return a-b});
//   console.log(sort_coins)
//    if (amount == 0) {
//     return 0;
//   }
//   if (amount < sort_coins[0]) {
//     return -1;
//   } 
//   var count = 0;
//   var coin = sort_coins.pop();
//   console.log(coin);
//   while (amount > 0) {
//     if (amount < coin) {
//       coin = sort_coins.pop();
//       console.log(coin, amount, count);
//     } else {
//       count++;
//       amount -= coin;
//     }
//   }
//   return amount == 0 ? count : -1;
// };


// 动态规划
// 动态规划：尝试分解子问题

// - dp[i]: 表示总金额为 i 的时候最优解法的硬币数

// - 我们想一下：求总金额 120 有几种方法？下面这个思路关键了 !!!
//   一共有 3 种方式，因为我们有 3 种不同面值的硬币。
//   1.拿一枚面值为 1 的硬币 + 总金额为 119 的最优解法的硬币数量
//     这里我们只需要假设总金额为 119 的最优解法的硬币数有人已经帮我们算好了，
//     不需要纠结于此。(虽然一会也是我们自己算，哈哈)
//     即：dp[119] + 1
//   2.拿一枚面值为 2 的硬币 + 总金额为 118 的最优解法的硬币数
//     这里我们只需要假设总金额为 118 的最优解法的硬币数有人已经帮我们算好了
//     即：dp[118] + 1
//   3.拿一枚面值为 5 的硬币 + 总金额为 115 的最优解法的硬币数
//     这里我们只需要假设总金额为 115 的最优解法的硬币数有人已经帮我们算好了
//     即：dp[115] + 1
    
//   - 所以，总金额为 120 的最优解法就是上面这三种解法中最优的一种，也就是硬币数最少
//     的一种，我们下面试着用代码来表示一下：
    
//   - dp[120] = Math.min(dp[119] + 1, dp[118] + 1, dp[115] + 1);
    
//   - 推导出「状态转移方程」：
//     dp[i] = Math.min(dp[i - coin] + 1, dp[i - coin] + 1, ...)
//     其中 coin 有多少种可能，我们就需要比较多少次，那么我们到底需要比较多少次呢？
//     当然是 coins 数组中有几种不同面值的硬币，就是多少次了~ 遍历 coins 数组，
//     分别去对比即可
    
//   - 上面方程中的 dp[119]，dp[118]，dp[115] 我们继续用这种思想去分解，
//     这就是动态规划了，把这种思想，思考问题的方式理解了，这一类型的题目
//     问题都不会太大。

var coinChange = function(coins, amount) {
  let dp = new Array( amount + 1 ).fill( Infinity );
  dp[0] = 0;
  
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// console.log(coinChange([1, 2, 5, 10], 18));
console.log(coinChange([186,419,83,408], 6249));
