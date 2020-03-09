// 将两个有序链表合并为一个新的有序链表并返回。
// 新链表是通过拼接给定的两个链表的所有节点组成的。

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const l1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(4);
const l2 = new ListNode(1);
const n4 = new ListNode(3);
const n5 = new ListNode(4);
l1.next = n2;
n2.next = n3;
l2.next = n4;
n4.next = n5;

var mergeTwoLists = function(l1, l2) {
     if(l1 == null) {
            return l2;
        }
        if(l2 == null) {
            return l1;
        }

        if(l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
};

console.log(mergeTwoLists(l1, l2));
