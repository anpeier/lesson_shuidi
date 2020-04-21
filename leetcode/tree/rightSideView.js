// 199. 二叉树的右视图
// 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，
// 返回从右侧所能看到的节点值。
// 示例:
// 输入: [1,2,3,null,5,null,4]
// 输出: [1, 3, 4]
// 解释:
//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var a1 = new TreeNode(1);
var a2 = new TreeNode(2);
var a3 = new TreeNode(3);
a1.left = a2;
a1.right = a3;
var a4 = new TreeNode(5);
var a5 = new TreeNode(4);
a2.right = a4;
a3.right = a5;
var rightSideView = function (root) {
  if (!root) return [];
  let res = [],
    arr = [];
  arr.push(root);
  while (arr.length) {
    let curNum = arr.length;
    while (curNum--) {
      node = arr.shift();
      if (node.left) {
        arr.push(node.left);
      }
      if (node.right) {
        arr.push(node.right);
      }
      if (curNum == 0) {
        res.push(node.val);
      }
    }
  }
  return res;
};

console.log(rightSideView(a1));
