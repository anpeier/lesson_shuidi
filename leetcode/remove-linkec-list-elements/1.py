class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        prev = ListNode(0) # 哨兵结点
        # 当前结点的下一个结点
        prev.next = head
        cur = prev
        while cur.next:
            if cur.next.val == val: # 需要删除
                cur.next = cur.next.next # next 指向要删除的结点的下一个结点
            else:
                cur = cur.next # 不需要删除
        return prev.next