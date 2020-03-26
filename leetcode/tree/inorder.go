package main

import "fmt"

// 树节点
type Node struct {
	value int
	left  *Node
	right *Node
}

// 递归遍历
// var res []int

// func inorderTraversal(root *Node) []int {
// 	res = make([]int, 0)
// 	dfs(root)
// 	return res
// }

// func dfs(root *Node) {
// 	if root != nil {
// 		res = append(res, root.value)
// 		dfs(root.left)
// 		dfs(root.right)
// 	}
// }

// 先序
func preorderTraversal(root *Node) []int {
	if root == nil {
		return nil
	}
	var res []int
	var stack []*Node
	stack = append(stack, root)
	for len(stack) > 0 {
		pre := stack[len(stack)-1]
		res = append(res, pre.value)
		stack = stack[0 : len(stack)-1]
		if pre.right != nil {
			stack = append(stack, pre.right)
		}
		if pre.left != nil {
			stack = append(stack, pre.left)
		}
	}
	return res
}

// 中序
// func inorderTraversal2(root *Node) []int {
// 	var res []int
// 	var stack []*Node

// 	for root != nil || len(stack) > 0 {
// 		//push
// 		for root != nil {
// 			stack = append(stack, root)
// 			root = root.left
// 		}

// 		//pop
// 		pre := len(stack) - 1
// 		res = append(res, stack[pre].value)
// 		root = stack[pre].right
// 		stack = stack[:pre]
// 	}
// 	return res
// }

func CreateNode(value int) *Node {
	return &Node{value, nil, nil} // nil 为空 & 取地址
}

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

	// 先中后序遍历
	fmt.Print(preorderTraversal(root))
}
