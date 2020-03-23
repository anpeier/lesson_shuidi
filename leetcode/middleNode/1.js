// 876.链表的中间结点
// 给定一个带有头结点 head 的非空单链表，返回链表的中间结点。
// 如果有两个中间结点，则返回第二个中间结点。
// 示例 1：
// 输入：[1,2,3,4,5]
// 输出：此列表中的结点 3 (序列化形式：[3,4,5])
// 返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
// 注意，我们返回了一个 ListNode 类型的对象 ans，这样：
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5,
// 以及 ans.next.next.next = NULL.
// 示例 2：
// 输入：[1,2,3,4,5,6]
// 输出：此列表中的结点 4 (序列化形式：[4,5,6])
// 由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。

function ListNode(val) {
  this.val = val;
  this.next = null; // 指向下一个结点
}
const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(6);
const n4 = new ListNode(6);
const n5 = new ListNode(4);
const n6 = new ListNode(5);
const n7 = new ListNode(6);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
// n6.next = n7;

// 先求长度再找结点
// var middleNode = function(head) {
//   let dummy = new ListNode(-1),
//     cur = new ListNode(-1),
//     count = 0;
//   dummy.next = head;
//   cur.next = head;
//   while (cur.next != null) {
//     cur = cur.next;
//     count++;
//   }
//   if (count % 2 == 0) {
//     count = count / 2 + 1;
//   } else {
//     count = Math.ceil(count / 2);
//   }
// //   console.log(dummy)
//   while(count > 0) {
//     dummy = dummy.next
//     count--
//   }
//   return dummy
// };

// 快慢指针
// var middleNode = function(head) {
//     let fast = new ListNode(-1),
//         slow = new ListNode(-1)
//         fast.next = head
//         slow.next = head
//     while(fast.next != null && fast.next.next != null){
//         fast = fast.next.next
//         slow = slow.next
//     }
//     slow = slow.next
//     return slow
// };

// var middleNode = function(head) {
//   let fast = head,
//     slow = head;
//   while (fast && fast.next != null) {
//     fast = fast.next.next;
//     slow = slow.next;
//   }
//   return slow;
// };

//2.数组
var middleNode = function(head) {
    let len = 0, newHead = head, res = []
    while(newHead){
        res[len++] = newHead
        newHead = newHead.next
    }
    return res[len>>1]
}

console.log(middleNode(n1));
