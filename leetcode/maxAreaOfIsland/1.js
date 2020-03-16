// 给定一个包含了一些 0 和 1的非空二维数组 grid , 
// 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。
// 你可以假设二维矩阵的四个边缘都被水包围着。
// 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)
// 示例 1:
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// 对于上面这个给定矩阵应返回 6。注意答案不应该是11，
// 因为岛屿只能包含水平或垂直的四个方向的‘1’。
// 示例 2:
// [[0,0,0,0,0,0,0,0]]
// 对于上面这个给定的矩阵, 返回 0。
// 注意: 给定的矩阵grid 的长度和宽度都不超过 50。

// 有问题
var maxAreaOfIsland = function(grid) {
    let arr = [], // 存储当前为1的元素周围的1
        hasArr = [], // 标记已经在arr的元素
        res = 0 // 结果
        
    let len1 = grid.length,len2 = grid[0].length
    for (let i = 0; i < len1; i++) {
        let temp = 0 // 当前岛屿面积
        for (let j = 0; j < len2; j++) {
            if(grid[i][j] == 1 && (hasArr.indexOf('' + i+j) == -1)){
                arr.push(j)
                arr.push(i)
                while (arr.length > 0) {
                    let n = arr.pop()
                    let m = arr.pop()
                    temp++
                    console.log(temp,n,m)
                    hasArr.push('' + n + m)
                    if(n-1 != -1 && grid[n-1][m] == 1 && (hasArr.indexOf('' + (n-1) + m) == -1)){
                        arr.push(m)
                        arr.push(n-1)
                    }
                    if(m-1 != -1 && grid[n][m-1] == 1 && (hasArr.indexOf(''+n+(m-1)) == -1)){
                        arr.push(m-1)
                        arr.push(n)
                    }
                    if(n+1 != len1 && grid[n+1][m] == 1 && (hasArr.indexOf('' + (n+1) + m) == -1)){
                        arr.push(m)
                        arr.push(n+1)
                    }
                    if(m+1 !=len2 && grid[n][m+1] == 1 && !(hasArr.indexOf(''+n+(m+1)) == -1)){
                        arr.push(m+1)
                        arr.push(n)
                    }
                    // console.log(hasArr)
                }
                res = Math.max(res,temp)
                arr = []
            }
        }
    }
    return res
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
// var maxAreaOfIsland = function(grid) {
//         let x=grid.length,y=grid[0].length
//         let max=0
//         for(let i=0;i<x;i++){
//             for(let j=0;j<y;j++){
//                 if(grid[i][j]==1) max = Math.max(max,countArea(grid, i, j, x, y))
//             }
//         }
//     return max
// };

// let countArea = (grid, i, j, x, y) =>{
//     if(i<0 || i>=x || j<0 || j>=y || grid[i][j]==0) return 0    
//     // i>=x和j>=y 这两个判断条件是因为题目假设二维矩阵的四个边缘都被水包围着
//     grid[i][j] = 0
//     let count = 1
//     count += countArea(grid, i+1, j, x, y)
//     count += countArea(grid, i-1, j, x, y)
//     count += countArea(grid, i, j+1, x, y)
//     count += countArea(grid, i, j-1, x, y)
//     return count
// }


console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
))
// console.log(maxAreaOfIsland([
//     [1,1,0,0,0],
//     [1,1,0,0,0],
//     [0,0,0,1,1],
//     [0,0,0,1,1]]
// ))