var removeDuplicates = function (nums) {
    const size = nums.length;
    let slowP = 0; // 慢指针
    for (let fastP = 0; fastP < size; fastP++) {
        // console.log(nums[fastP])
        if (nums[fastP] !== nums[slowP]) { // 从同一个位置0开始
          slowP++; // 不一样
          // 一旦 slowP前进了 新的位置要确定新的数 cur指向的数
          nums[slowP] = nums[fastP]; // 设置每个位置，不重复的数
        }
    }
    return slowP + 1; // 新的数组长度
}

console.log(removeDuplicates([1,1,2,2,3,4]))