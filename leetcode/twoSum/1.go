package main

import "fmt"

func twoSum(nums []int, target int) []int {
	// go 定义一个hashMap express =>  go
	h := make(map[int]int) // 申请一个hashMap 地址
	// h[2] = 0
	// 遍历 O(n)
	for i, value := range nums {
		// if wanted, ok := h[value]; ok {
		//   fmt.Println(wanted, ok)
		// } else {
		// 2  7 做为放进去，
		// nums[i]  7  一对
		if wanted, ok := h[value]; ok { // for
			// fmt.Println(h, wanted, ok)
			return []int{wanted, i}
		} else {
			// fmt.Println(wanted, ok)
			h[target-value] = i // 当前值想要的对象下标为i
		}

		// }
		// fmt.Println(i, value);
	}
	// fmt.Println(h)
	return nil
}

func main() {
	fmt.Println(twoSum([]int{2, 6, 7, 9, 5}, 9))
}
