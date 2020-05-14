let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// 9:   和 未洗牌这个区间 0 ~ 9 选择一个随机数  交换
// 8：  和 未洗牌这个区间 0 ~ 8 选择一个随机数  交换
// 7：  和 未洗牌这个区间 0 ~ 7 选择一个随机数  交换
// 6：  和 未洗牌这个区间 0 ~ 6 选择一个随机数  交换
// 每个数参与交换
function shuffle(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i ++) {
    let randomIndex = Math.floor(Math.random() * (len - i));
    // 最后
    [arr[len - i - 1], arr[randomIndex]] = [arr[randomIndex],arr[len - i - 1]]
  }
  return arr;
}