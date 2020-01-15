function ListNode(val) {
    this.val = val;
    this.next = null; // 指向下一个结点
}

function removeElements(head, val) {
    // 如果当前结点cur 下一个结点的值为val，
    // 当前结点的next指向next的next
    // 如果头结点的值为val
    const dummy = { // 哨兵结点
    // val 属性为空
        next: head // 哨兵结点为头结点 可能是val的结点服务 保存链表
    }
    let cur = dummy; // 当前结点先指向哨兵结点
    while (cur && cur.next) { // 遍历
        let next = cur.next; // 当前结点的下一个结点
        if (next.val === val) {
            cur.next = next.next; // 值为val 下一个结点从链表关系中移除
        }
        if (next.val !== val) { // 不要移除的结点
            cur = next;
        }
    }
    return dummy.next; // 返回dummy 指向的下一个结点
};

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
n6.next = n7;
console.log(removeElements(n1,6))