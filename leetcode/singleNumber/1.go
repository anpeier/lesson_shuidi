package main

import "fmt"

// func singleNumber(nums []int) int {
// 	m := make(map[int]int)
// 	for _, v := range nums {
// 		// fmt.Println(v)
// 		_, ok := m[v] // 检测hashMap 是否有这个值
// 		// fmt.Println(ab, ok)
// 		if ok { // 出现过两次
// 			delete(m, v) // 删除掉该元素
// 		} else {
// 			m[v] = 1
// 		}
// 	}
// 	for k := range m {
// 		// fmt.Println(k)
// 		return k
// 	}
// 	return 0
// }

func singleNumber(nums []int) int {
	res := 0
	for _, n := range nums {
		res ^= n // 做异或运算
	}
	return res
}

func main() {
	fmt.Printf("%d", singleNumber([]int{1, 3, 2, 4, 3, 1, 2}))
}
