/*
给定一个偶数长度的数组，其中不同的数字代表着不同种类的糖果，
每一个数字代表一个糖果。你需要把这些糖果平均分给一个弟弟和一个妹妹。
返回妹妹可以获得的最大糖果的种类数。
示例 1:
输入: candies = [1,1,2,2,3,3]
输出: 3
解析: 一共有三种种类的糖果，每一种都有两个。
     最优分配方案：妹妹获得[1,2,3],弟弟也获得[1,2,3]。这样使妹妹获得糖果的种类数最多。
示例 2 :
输入: candies = [1,1,2,3]
输出: 2
注意:
    数组的长度为[2, 10,000]，并且确定为偶数。
    数组中数字的大小在范围[-100,000, 100,000]内。 
*/
/**
 * 
 * @param {Array length even} candies 
 * @return {number} count
 */
var distributeCandies = (candies) => {
    let count = 0;
    //1.找出种类数,unique
    //出现过的？
    let obj = {};//对象字面量
    // candies.forEach(item => {
    //     console.log(item);
    // });
    for(let item of candies){
        if(!obj[item]){
            obj[item] = 1;
            count++;
        }
    }
    // if(count >= candies.length/2){
    //     return candies.length/2;
    // }
    // return count;
    // return (count >= candies.length/2 ?　candies.length/2 : count);
    return (count >= candies.length >> 1 ?　candies.length >> 1 : count);//右移一位
}
console.log(distributeCandies([1,1,2,2,3,3]));