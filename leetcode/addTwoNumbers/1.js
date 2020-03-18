// 给出两个 非空 的链表用来表示两个非负的整数。其中，
// 它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
// 示例：
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var n1 = new ListNode(1);
var n2 = new ListNode(9);
var n3 = new ListNode(9);
// var n4 = new ListNode(5);
// var n5 = new ListNode(6);
// var n6 = new ListNode(4);
// var n7 = new ListNode(2);
// var n8 = new ListNode(2);
// n1.next = n2;
n2.next = n3;

// n4.next = n5;
// n5.next = n6;
// n6.next = n7;
// n7.next = n8;
var addTwoNumbers = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (!l1 && !l2) return null;
  let dummy = new ListNode(-1),
    flag = false,
    res = dummy;
  while (l1 || l2) {
    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (flag ? 1 : 0);
    res.next = new ListNode(val % 10);
    res = res.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    flag = val > 9;
  }
  if (flag) {
    res.next = new ListNode(1);
  }
  return dummy.next;
};
console.log(addTwoNumbers(n1, n2));
