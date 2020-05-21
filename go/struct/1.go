// go语言仅支持封装，不支持继承和多态，不过有接口
// 没有class，只有struct

package main

import "fmt"

type treeNode struct {
	value       int
	left, right *treeNode
}

// 值接收者 vs 指针接收者
// 要改变内容必须使用指针接收者
// 结构过大也考虑指针接收者
// 一致性：如果有指针接收者，最好都是指针接收者

// 值接收者 go语言特有
func (node treeNode) print() { // root.print() 传的是值
	fmt.Print(node.value, " ")
}

// 指针接收者
func (node *treeNode) setValue(value int) {
	node.value = value
}

// 中序遍历
func (node *treeNode) traverse() {
	if node == nil {
		return
	}
	node.left.traverse()
	node.print()
	node.right.traverse()
}

func createNode(value int) *treeNode {
	return &treeNode{value: value}
}

func main() {
	var root treeNode

	root = treeNode{value: 3}
	root.left = &treeNode{}
	root.right = &treeNode{5, nil, nil}
	root.right.left = new(treeNode)
	root.right.right = &treeNode{}
	root.left.right = createNode(2)
	root.right.left.setValue(4)
	root.left.print()

	fmt.Println(root.left)

	root.traverse()
	// nodes := []treeNode{
	// 	{value: 3},
	// 	{},
	// 	{6, nil, &root},
	// }
	// fmt.Println(nodes)
}
