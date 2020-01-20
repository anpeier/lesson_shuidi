function ListNode(val) {
    this.val = val;
    this.next = null;
}

var n1 = new ListNode(1)
var n2 = new ListNode(2)
var n3 = new ListNode(3)
var n4 = new ListNode(4)
var n5 = new ListNode(5)
var n6 = new ListNode(6)
var n7 = new ListNode(7)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n6
n6.next = n7

var reverseKGroup = function(head, k) {
    if (!head || k == 1) { // 空链表 k = 1
        return head
    }
    var dummy = {// 哨兵结点
        next: head
    }

    // reverse
    var start = dummy; // 初始化时为dummy 动态 之后会变成每个小组的开始结点
    var end = head; // 初始化时 ? k 相关 这个小组的第一个结点
    var count = 0; // 计数
    while (end != null) { // 一次遍历
        count ++;
        if (count % k == 0) { // 整除 要反转 得到小组
            // 更新start 一次反转后 start应该是这次反转的尾结点
            start = reverse(start, end.next); // 反转 要能跟其它小组链上
            end = start.next;
        }else {
            end = end.next; // 更新end的值
        }
    }
    return dummy.next
}
// start , end 是要reverse的
// 一次翻转
var reverse = function(start, end) {
    var curr = start.next; // 头结点 dummy 1开始
    var prev = start; // 前驱结点
    var first = curr; // 保存第一个结点 下一次的头指针
    while (curr != end) {
        var temp = curr.next; // 下一个结点
        console.log(temp.val, curr.val, prev.val)
        curr.next = prev; // reverse
        prev = curr; // 当前结点变成下一次的前驱结点
        curr = temp; // 当前结点为下一个结点
    }
    //prev 变成分组的头结点
    start.next = prev;
    first.next = curr; // 原来的头结点变成了尾结点
    // 小组之间链起来 上一次的尾结点指向下一分组的开始结点
    return first;
}

console.log(reverseKGroup(n1, 2))