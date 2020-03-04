package main //module

import "fmt"

func main() { //入口
	// map hashmap 数据结构 es6 map set
	// js es5 json object
	// go 现代c语言
	var countryCapitalMap map[string]string     //变量声明 没有分配空间
	countryCapitalMap = make(map[string]string) // make alloc 内存空间
	countryCapitalMap["France"] = "巴黎"
	countryCapitalMap["Italy"] = "罗马"
	countryCapitalMap["Japan"] = "东京"
	countryCapitalMap["India"] = "新德里"

	// 遍历
	// arr  索引
	// map json  键 没有顺序[{}]
	// 区间 10  [0-10] for(var i =0; i < 10; i++)
	for country := range countryCapitalMap { //数组
		fmt.Println(country, "首都是", countryCapitalMap[country])
	}
}
