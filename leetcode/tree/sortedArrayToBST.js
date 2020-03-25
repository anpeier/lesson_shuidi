// 108. 有序数组转二叉搜索树
// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
// 示例:
// 给定有序数组: [-10,-3,0,5,9],
// 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
//       0
//      / \
//    -3   9
//    /   /
//  -10  5
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// 递归构建每个子树。将数组从最中间项分割得到三个部分：子数组1，中间项，子数组2。
// 将中间项作为当前节点的val，对子数组1和子数组2分别递归执行原方法，
// 得到的两个子树分别作为上一个节点的左子树与右子树
var sortedArrayToBST = function(nums) {
  if (!nums.length) return null;
  const root = new TreeNode(null);

  if (nums.length > 1)
    root.left = sortedArrayToBST(nums.splice(0, nums.length / 2));
  root.val = nums[0];
  root.right = sortedArrayToBST(nums.splice(1));
  return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
