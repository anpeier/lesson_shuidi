const distributeCandies = (candies) => {
    //去重 数据结构 有种结构 容器 数组容器 不重复
    const count = new Set(candies);//es6
    // console.log(count.size);
    return Math.min(count.size,candies.length >> 1);//数学对象
}
console.log(distributeCandies([1,1,2,2,3,3]));