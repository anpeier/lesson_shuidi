var distributeCandies = function(candies, num_people) {
    var arr = new Array(num_people).fill(0)
    var i = 0
    while (candies != 0) {
        arr[i % num_people] += Math.min(i + 1, candies)
        candies -= Math.min(i+1, candies)
        i++ 
    }
    return arr
};

console.log(distributeCandies(10,3))
// 1 1
// 2 3
// 3 6
// 4 10
// 1/2 n*n +n