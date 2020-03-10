// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。

// 示例 :
// 给定二叉树

//           1
//          / \
//         2   3
//        / \     
//       4   5    

// 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

// 注意：两结点之间的路径长度是以它们之间边的数目表示。
function TreeNode (val) {
    this.val = val
    this.left = this.right = null
}

var a1 = new TreeNode(1); //root 根结点
var a2 = new TreeNode(2);
var a3 = new TreeNode(3);   //一棵小树
a1.left = a2;
a1.right = a3;
// 2 它的子树？  形成是不是可以用递归的思想去形成?
var a4 = new TreeNode(4);
var a5 = new TreeNode(5);
var a6 = new TreeNode(6);
a2.left = a4;
a2.right = a5;
// a5.right = a6
var diameterOfBinaryTree = function(root) {
    if (root.left == null && root.right == null) {
        return 0
    }
    let cur = root,count = 1,stack=[]
    stack.push(cur)
    while (stack.length) {
        cur = stack.pop()
        count--
        if(cur.right){
            stack.push(cur.right)
            count++
        } 
        if(cur.left) {
            stack.push(cur.left)
            count++
        }
    }
    return count-1
};

// var diameterOfBinaryTree = function(root) {
//     let res = 0
//     depth(root)
//     return res
//     function depth (node) {
//         if (!node) return 0 // 节点不存在返回0
//         let left = depth(node.left) // left为左子树的深度
//         let right = depth(node.right)//right 为右子树的深度
//         res = Math.max(left + right, res) //计算l+r 更新res
//         return Math.max(left, right)+1 //返回该节点为根的子树的深度
//     }
// };

console.log(diameterOfBinaryTree(a1))