// 109.有序链表转二叉搜索树
// 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
// 示例:
// 给定的有序链表： [-10, -3, 0, 5, 9],
// 一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：
//       0
//      / \
//    -3   9
//    /   /
//  -10  5

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function ListNode(val) {
  this.val = val;
  this.next = null; // 指向下一个结点
}
const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

// 方法一 分割链表
var sortedListToBST = function(head) {
  if (head == null) return null;
  let fast = head,
    slow = head,
    pre = null;
  const root = new TreeNode(null);
  while (fast && fast.next != null) {
    pre = slow; // 记录中间值前一个节点
    fast = fast.next.next;
    slow = slow.next;
  }
//   console.log(head)
  root.val = slow.val;
  if (pre != null) pre.next = null; // 切断前后节点的关联
//   console.log(head)
  if (head == slow) return root;
  root.left = sortedListToBST(head);
  root.right = sortedListToBST(slow.next);
  return root;
};

// 方法二 先转换成数组再转换成二叉树
// 108.有序数组转二叉搜索树
// sortedArrayToBST

console.log(sortedListToBST(n1));

// var sortedListToBST = function(head) {
//     if (head === null) return null
//     let mid = findMiddle(head)
//     let root = new TreeNode(mid.val)
//     if (head === mid) return root
//     root.left = sortedListToBST(head)
//     root.right = sortedListToBST(mid.next)
//     function findMiddle(head) {
//         let slow = head, fast = head, pre = null
//         while(fast!== null && fast.next !== null) {
//             pre = slow
//             slow = slow.next
//             fast = fast.next.next
//         }
//         if (pre !== null) {
//             pre.next = null
//         }
//         return slow
//     }
//     return root

// };
