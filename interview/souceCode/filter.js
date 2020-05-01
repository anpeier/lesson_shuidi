Array.prototype.myFilter = function (fn) {
  let res = [];
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    fn(this[i]) && res.push(this[i]);
  }
  return res;
};
let arr = [1, 2, 54, 6];
let arr1 = arr.myFilter(function (item) {
  return item > 5;
});
console.log(arr1);
