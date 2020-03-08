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
