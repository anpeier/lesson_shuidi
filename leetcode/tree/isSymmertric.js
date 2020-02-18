function TreeNode (val) {
    this.val = val
    this.left = this.right = null
}

var a1 = new TreeNode(1); //root 根结点
var a2 = new TreeNode(2);
var a3 = new TreeNode(2);   //一棵小树
a1.left = a2;
a1.right = a3;
var a4 = new TreeNode(4);
var a5 = new TreeNode(4);
a2.left = a4
a3.right = a5

// var isSymmetric = function(root) {
//     return isSame(root, root)
// };

// const isSame = (root1,root2) => {
//     if (root1 === null && root2 === null) {
//         return true
//     }
//     if (root1 === null || root2 === null) {
//         return false
//     }
//     return (root1.val == root2.val)
//         && isSame(root1.right, root2.left)
//         && isSame(root2.left, root1.right)
// }

var isSymmetric = function (root) {
    if (root === null && root === null) {
        return true
    }
    var q = []
    q.push(root)
    q.push(root)
    while (q.length > 0) {
        let q1 = q.pop()
        let q2 = q.pop()
        if (q1 == null && q2 == null) continue
        if (q1 == null || q2 == null) return false
        if (q1.val != q2.val) return false

        q.push(q1.left)
        q.push(q2.right)
        q.push(q1.right)
        q.push(q2.left)
    }
    return true
}

console.log(isSymmetric(a1))