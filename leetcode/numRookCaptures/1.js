// 999. 车的可用捕获量
// 在一个 8 x 8 的棋盘上，有一个白色车（rook）。也可能有空方块，
// 白色的象（bishop）和黑色的卒（pawn）。它们分别以字符 “R”，“.”，“B” 和 “p” 给出。
// 大写字符表示白棋，小写字符表示黑棋。
// 车按国际象棋中的规则移动：它选择四个基本方向中的一个（北，东，西和南），
// 然后朝那个方向移动，直到它选择停止、到达棋盘的边缘或移动到同一方格来捕获该方格上颜色相反的卒。
// 另外，车不能与其他友方（白色）象进入同一个方格。
// 返回车能够在一次移动中捕获到的卒的数量。
/** 
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let num = 0
    for(var i = 0; i < 8; i++){
        // 寻找车 没有车跳过
        if(!board[i].includes('R')) continue
        // 确定车的纵向坐标
        let j = board[i].indexOf('R')

        // 车上方寻找卒
        for(let m = i-1; m > 0; m--){
            if(board[m][j] === 'B') break

            if(board[m][j] === 'p') {
                num++
                break
            }
        }
        // 车下方寻找卒
        for(let n = i+1; n <8; n++){
            if(board[n][j] === 'B') break

            if(board[n][j] === 'p') {
                num++
                break
            }
        }
        // 车左方寻找卒
        for(let k = j-1; k >0; k--){
            if(board[i][k] === 'B') break

            if(board[i][k] === 'p') {
                num++
                break
            }
        }
        // 车右方寻找卒
        for(let p = j+1; p < 8; p++){
            if(board[i][p] === 'B') break

            if(board[i][p] === 'p') {
                num++
                break
            }
        }
    }
    return num
};
console.log(numRookCaptures([
    [".",".",".",".",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    ["p","p",".","R",".","p","B","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".","B",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".",".",".",".",".","."]]
))
