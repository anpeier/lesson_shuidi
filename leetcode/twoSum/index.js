// 给定一个整数数组 nums 和一个目标值 target，
// 请你在该数组中找出和为目标值的那 两个 整数，
// 并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。
// 但是，你不能重复利用这个数组中同样的元素。

var toSum =  function (arr,target) {
  let map = new Map()
  for(let i = 0; i< arr.length;i++){
    if(map.get(target - arr[i]) !== undefined){
      return [i,map.get(target-arr[i])]
    }else {
      map.set(arr[i],i)
    }
  }
  return false
}

console.log(toSum([4,5,4,5,8],8))