var moveZeroes = function (nums) {
  // 定义一个慢指针
  var index = 0;

  for (var i = 0; i< nums.length; i++) {
    
    var num = nums[i]; //当前的每个值
    // 如果是0  index 不增加， 它就比i慢
    // 如果是0 留在nums数组中, index 做为下标， index++
    if (num != 0) {
      nums[index++] = num;
      // index++;
    }
    //0 length-index
  }
  for (var i = index; i < nums.length; i++) {
    nums[index++] = 0;
  }

}