// 1111.有效括号的嵌套深度
// 求最大嵌套括号最小的分组
var maxDepthAfterSplit = function(seq) {
    let dep = 0;
    return seq.split("").map((value, index) => {
        if (value === '(') {
            ++dep;
            return dep % 2;
        } else {
            let ans = dep % 2;
            --dep;
            return ans;
        }
    });
};
console.log(maxDepthAfterSplit('(()(())())'))