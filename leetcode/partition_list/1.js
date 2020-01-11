function ListNode (val) {
    this.val  = val;
    this.next = null;
}

var  partition = function (head, x) {
    var smaller = dummSmaller = new  ListNode(-1); // -1 正数
    var greater = dummyGreater = new ListNode(-1);
    while(head) {
        console.log(head.val);
        // 链表的遍历
        // head 动态
        if (head.val < x) {
            smaller.next = head; // 进入较小值分区
            smaller = smaller.next;  // 更新smaller
        }else {
            greater.next = head;
            greater = greater.next;
        }
        head = head.next;
    }
    // 两个分区合并
    smaller.next = dummyGreater.next;
    greater.next = null; // 最后一个节点的next属性为空
    return dummSmaller.next; // 返回分割后的头节点
}

const  n1 = new ListNode(1);
const  n2 = new ListNode(4);
const  n3 = new ListNode(3);
const  n4 = new ListNode(2);
const  n5 = new ListNode(5);
const  n6 = new ListNode(2);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
// console.log(n1);
console.log(partition(n1, 3));