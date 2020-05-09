// 杨辉三角

var generate = function (numRows) {
  const result = [];
  if (numRows <= 0) {
      return result;
  }
  for (let i = 0; i < numRows; i ++) {
      const subArr = [];
      for (let j = 0; j <= i; j++) {
          if (j > 0 && j < i) {
              subArr.push(result[i-1][j-1] + result[i-1][j]);
          } else {
              subArr.push(1);
          }
      }
      result.push(subArr);
  }
  return result;
};

console.log(generate(5))
