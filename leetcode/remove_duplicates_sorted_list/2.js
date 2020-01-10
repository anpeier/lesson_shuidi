function ListNode(val) { //链表节点对象
    this.val = val; // 链表结点 值
    this.next = null; // 指针
    return this
}

var removeDuplicates = function (head) {
    if (head == null || head.next == null) return head;
    var cur = head;
    while (cur.next != null) { // 一重循环
        if (cur.next.val === cur.val) {
            cur.next = cur.next.next; // 重复的 指向下一个
        }else {
            cur = cur.next; //继续做
        }
    }
}

const n1 = new ListNode(1); //头指针
const n2 = new ListNode(1);
const n3 = new ListNode(2);
n1.next = n2;
n2.next = n3;
console.log(n1)