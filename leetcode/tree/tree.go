// go    tree
package main

import "fmt"

// 树节点
type Node struct {
	value int
	left  *Node
	right *Node
}

// 找节点 时间复杂度  链表的 O(N) -> O(logN)  递归
func (node *Node) FindNode(n *Node, x int) *Node {
	// 在一棵树找节点  很多小事情 每三个节点里
	if n == nil {
		return nil
	} else if n.value == x {
		// 推出条件
		return n
	} else {
		p := node.FindNode(n.left, x) //递  沿着左子树
		if p != nil {                 //找到了
			return p
		}
		return node.FindNode(n.right, x)
	}
}
func (node *Node) GetTreeHeight(n *Node) int {
	//  满二叉树  完全二叉树
	if n == nil {
		return 0
	} else {
		// 当前节点的高度？ Math.max( 左子树的高度 ，右子树的高度 ) + 1
		lHeight := node.GetTreeHeight(n.left)
		rHeight := node.GetTreeHeight(n.right)
		if lHeight > rHeight {
			return lHeight + 1
		} else {
			return rHeight + 1
		}
	}
}
func (node *Node) GetLeafNode(n *Node) {
	// 叶子节点， 左节点和有节点为空
	// 每个节点 左节点和
	if n != nil {
		if n.left == nil && n.right == nil {
			fmt.Printf("%d", n.value)
		}
		node.GetLeafNode(n.left)
		node.GetLeafNode(n.right)
	}
}

func CreateNode(value int) *Node {
	return &Node{value, nil, nil} // nil 为空 & 取地址
}

// tree treeNode   递归的概念来定义的
func main() {
	// 		 5
	// 2         4
	// 	 7   8     9
	//  6
	root := CreateNode(5) // 根节点
	root.left = CreateNode(2)
	// CreateNode 生成的结点可以作为其他节点的左子针
	root.right = CreateNode(4)
	root.left.right = CreateNode(7)
	root.left.right.left = CreateNode(6)
	root.right.left = CreateNode(8)
	root.right.right = CreateNode(9)

	// fmt.Printf("%d\n", root.FindNode(root, 4).value) // 4的节点
	// fmt.Printf("%d\n", root.GetTreeHeight(root))     // 树的高度  递归
	// root.GetLeafNode(root)                           //所有叶子节点
	// 先中后序遍历
	fmt.Print(inorderTraversal(root))
}
