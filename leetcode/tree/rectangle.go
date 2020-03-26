// // 递归 
// // 把复杂问题由多个相同的简单问题， 
// // 退出条件

// 1. DOM  树状结构 递归
// 	       body root
// 		.container 
// 	.wrap
// div
// 	我的（文本节点）
// 2. Tree 
// 				 1
// 		 2      3
// 	4     5  	
// 			6
// 		null null
// 3. Vue 
// 	diff? 算法
//   树状组件 

// Vue 你觉得有什么应用的场景？ 
// diff 

package main

import ("fmt")

// 矩形类 OO GO  
type Rectangle struct { // constructor
	Length int 
	Width int
}
// prototype  火车头 prototype  方法  
func (r *Rectangle) Area() int {
	// this
	return r.Length * r.Width
}


func main() {
	r := Rectangle{4, 2} // go 面向对象
	fmt.Println(r.Area())
}
