// var twoSum = function(nums, target) {
//     if (!nums) return []
//     var len = nums.length
//     for (let i = 0; i < len; i++) {
//         for(j = i +1; j < len; j++) {
//             if(nums[i] + nums[j] == target){
//                 return [i,j]
//             }
//         }
//     }
// };

// var twoSum = function(nums, target) {
//     const temp = [...nums] // 备份原数组 浅拷贝 只遍历一层
//     nums.sort((a, b) => a - b)
//     let i = 0, j = nums.length - 1
//     while (i < j) {
//         const sum = nums[i] + nums[j]
//         if (sum === target) break
//         else if (sum > target) j--
//         else i++
//     }
//     const a = temp.indexOf(nums[i])
//     let b = temp.indexOf(nums[j])
//     if (a === b) { // 如果是[3, 3]这种
//         const right = temp.slice(a + 1) // 先截取后面的
//         console.log(right)
//         b = right.indexOf(nums[j]) + a + 1
//     }
//     return [a, b]
// };

var twoSum = function(nums, target) {
    var temp = [...nums] // 备份原数组
    nums.sort((a,b) => a-b)
    let i = 0 , j = nums.length - 1
    while(i < j) {
        sum = nums[i] + nums[j]
        if(sum == target) break
        else if(sum > target) j--
        else i++
    }
    var a = temp.indexOf(nums[i])
    var b = temp.indexOf(nums[j])
    if(a == b) {
        // slice包括当前元素 不改变原数组
        let right = temp.slice(a+1)
        b = right.indexOf(nums[j]) + a +1
    }
    return [a,b]
}

console.log(twoSum([3,4,3], 6))

// const twoSum = (nums,target) => {
//     let map = {}; //初始化哈希表

//     for(let i=0;i<nums.length;i++) {
//         map[nums[i]] = i; //将数组导入到哈希表
//     }

//     for(let i=0;i<nums.length;i++) {
//         const complement = target - nums[i];

//         //数据存在于哈希表且数据索引不与当前索引值相同
//         if(map.hasOwnProperty(complement) && map[complement] !== i) { 
//             return [i,map[complement]]; //输出当前索引和哈希表对应索引
//         }
//     }
// }