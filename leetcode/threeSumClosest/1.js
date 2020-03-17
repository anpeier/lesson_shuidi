// 最接近的三数之和
// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，
// 使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
// 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
// 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b) => {return a-b})
    let ans = nums[0] + nums[1] + nums[2];
        for(let i=0;i<nums.length;i++) {
            let start = i+1, end = nums.length - 1;
            while(start < end) {
                let sum = nums[start] + nums[end] + nums[i];
                if(Math.abs(target - sum) < Math.abs(target - ans))
                    ans = sum;
                if(sum > target)
                    end--;
                else if(sum < target)
                    start++;
                else
                    return ans;
            }
        }
        return ans;
};
// console.log(threeSumClosest([-1,2,1,-4],1))
console.log(threeSumClosest([1,1,-1,-1,3],3))