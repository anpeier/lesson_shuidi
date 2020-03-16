// 给定一个二叉树，返回其按层次遍历的节点值。
// （即逐层地，从左到右访问所有节点）。
// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：
// [
//   [3],
//   [9,20],
//   [15,7]
// ]
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var a1 = new TreeNode(3);
var a2 = new TreeNode(9);
var a3 = new TreeNode(20);
a1.left = a2;
a1.right = a3;
var a4 = new TreeNode(15);
var a5 = new TreeNode(7);
a3.left = a4;
a2.right = a5;
// 层次遍历思想
// 初始化 queue，用于存储当前层的节点
// 检查 queue 是否为空
//     如果不为空：依次遍历当前 queue 内的所有节点，
//     检查每个节点的左右子节点，
//     将不为空的子节点放入 queue，继续循环
//     如果为空：跳出循环
var levelOrder = function(root) {
  if (!root) return [];
  let arr = [root],
    res = [],
    cur = 0; //当前层
  while (arr.length > 0) {
    res[cur] = [];
    curNum = arr.length;
    while (curNum--) {
      node = arr.shift();
      res[cur].push(node.val);
      if (node.left) {
        arr.push(node.left);
      }
      if (node.right) {
        arr.push(node.right);
      }
    }
    cur++;
  }
  return res;
};
console.log(levelOrder(a1));
