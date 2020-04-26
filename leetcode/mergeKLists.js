// 23. 合并K个排序链表
// 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
// 示例:
// 输入:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 输出: 1->1->2->3->4->4->5->6
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const l1 = new ListNode(1);
const l2 = new ListNode(4);
const l3 = new ListNode(5);
const l4 = new ListNode(1);
const l5 = new ListNode(3);
const l6 = new ListNode(4);
const l7 = new ListNode(2);
const l8 = new ListNode(6);
l1.next = l2;
l2.next = l3;
l4.next = l5;
l5.next = l6;
l7.next = l8;
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let mergeTwoLists = (l1, l2) => {
    let preHead = new ListNode(-1);
    let preNode = preHead;
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        preNode.next = l1;
        l1 = l1.next;
      } else {
        preNode.next = l2;
        l2 = l2.next;
      }
      preNode = preNode.next;
    }
    preNode.next = l1 ? l1 : l2;
    return preHead.next;
  };
  let n = lists.length;
  if (n == 0) return null;
  let res = lists[0];
  for (let i = 1; i < n; i++) {
    if (lists[i]) {
      res = mergeTwoLists(res, lists[i]);
    }
  }
  return res;
};
console.log(mergeKLists([l1, l4, l7]));
