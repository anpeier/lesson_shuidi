// O(n2) -> O(n)
function maxSubArray(nums){
    var max = -Number.MAX_VALUE;
    var sum = 0;
    for(let num of nums){
        if(sum < 0){ // 加了跟没加一样
            sum = 0;
        }
        sum += num;
        max = Math.max(max,sum);
        // 加到了什么？让从下一个开始 什么情况放弃之前加的值
        // 不管之前最大子和是多少，他都是一次for循环
    }
    return max;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));