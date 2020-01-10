# 删除有序数组中的重复项
前端容易入门

读题：
  sortedArr [1,1,2]
  return length 2

- 一次遍历
  res []  空间复杂度 o(n)
  for
  排好序 后面的项一定大于等于前项
  等于时要原地删除
  res length
  抽象能力， 数理逻辑
- 双指针 pre cur
  cur 一直往前跑 一次循环的每一项遍历
  pre 后面追
  pre cur arr 前一个 后一个
  不等于pre+1
  相等时 产生重复项 pre 不走 会慢下来
  如果cur pre 不一样 那么 pre+1 值等于 cur
  从头到尾都是不重复的数
  每个位置放什么数？
  pre 指针 没有跟上cur 的速度 表示有重复
  pre cur n个空位
  pre+1 删除L: 把当前cur的值交给pre

- 快慢指针
  1. 一次循环 cur++ 一直跑
  2. cur 跟 pre arr[] 不等的话
     pre++
     相等的话 pre不动
  3. cur 再走的时候 继续比较
     新的cur 跟旧的pre
     不等时 pre++ 并把cur的值给新的pre
     把之前重复的空出来位置 给填上
  4. cur > length
     结束

- 数据结构 链表
  [1,1,2] 链表
  linkedList next
  1 1 2 next 指向1 改成指向2
  更好理解