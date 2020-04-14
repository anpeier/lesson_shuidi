// 445. 两数相加 II
// 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。
// 它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
// 进阶：
// 如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。
// 示例：
// 输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 8 -> 0 -> 7

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var n1 = new ListNode(1);
var n2 = new ListNode(9);
var n3 = new ListNode(9);
var n4 = new ListNode(5);
var n5 = new ListNode(6);
var n6 = new ListNode(4);
var n7 = new ListNode(2);
var n8 = new ListNode(2);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n5.next = n6;
n6.next = n7;
n7.next = n8;
// var addTwoNumbers = function (l1, l2) {
//   let n1 = "",
//     n2 = "";
//   while (l1 != null || l2 != null) {
//     n1 += l1 ? l1.val : "";
//     n2 += l2 ? l2.val : "";
//     l1 = l1 ? l1.next : null;
//     l2 = l2 ? l2.next : null;
//   }
//   // 位数过多会报错
//   let res = "" + (Number.parseInt(n1) + Number.parseInt(n2));
//   console.log(res,n1,n2)
//   let dummy = new ListNode(-1);
//   let ans = dummy;
//   for (let i = 0; i < res.length; i++) {
//     ans.next = new ListNode(res[i]);
//     ans = ans.next;
//   }
//   return dummy.next;
// };

/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const stack1 = [];
  const stack2 = [];
  const stack = [];

  let cur1 = l1;
  let cur2 = l2;
  let curried = 0;

  while (cur1) {
    stack1.push(cur1.val);
    cur1 = cur1.next;
  }

  while (cur2) {
    stack2.push(cur2.val);
    cur2 = cur2.next;
  }

  let a = null;
  let b = null;

  while (stack1.length > 0 || stack2.length > 0) {
    a = Number(stack1.pop()) || 0;
    b = Number(stack2.pop()) || 0;

    stack.push((a + b + curried) % 10);

    if (a + b + curried >= 10) {
      curried = 1;
    } else {
      curried = 0;
    }
  }

  if (curried === 1) {
    stack.push(1);
  }

  const dummy = {};

  let current = dummy;

  while (stack.length > 0) {
    current.next = {
      val: stack.pop(),
      next: null
    };

    current = current.next;
  }

  return dummy.next;
};

console.log(addTwoNumbers(n1, n5));
