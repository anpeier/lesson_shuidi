// 暴力法
// var maxProfit = function(prices) {
//     var profit = 0
//     len = prices.length
//     for (let i = 0; i < len-1; i++) {
//         for (let j = i+1; j <= len-1; j++) {
//             // console.log(profit[j])
//             // console.log(profit[i])
//             profit =Math.max(profit,prices[j] - prices[i])
//             // console.log(profit)
//         }
//     }
//     return profit
// };

var maxProfit = function(prices) {
  var profit = 0;
  var t = 0
  for(let i = prices.length - 1; i >= 0; i--){
      if (prices[i] > t) {
        t = prices[i]
      }
      profit = Math.max(profit, t - prices[i])
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([1,2]))
