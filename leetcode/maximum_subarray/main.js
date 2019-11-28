// O(n3) -> O(n2)
function maxSubArray(nums){
    let thissum,maxsum = -Number.MAX_VALUE;
    for(let i = 0;i < nums.length; i++){
        thissum = 0;
        for(let j = i; j < nums.length; j++){
            // 少一重循环
            thissum += nums[j];
            if(maxsum < thissum){
                maxsum = thissum;
            }
        }
    }
    return maxsum;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));