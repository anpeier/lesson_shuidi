package main

import (
	"fmt"
	"log"
)

// struct 结构体  关键字 强类型 node json
type User struct {
	Name string
	Age  int
}

type Person struct {
	Name string
	Age  int
}

func main() {
	u := User{
		Name: "Tom",
		Age:  18,
	} // 声明变量， 并赋值，类推推段
	// f 格式化
	log.Printf("hello struct %s, age is %d", u.Name, u.Age)
	// 输出 加一个换新
	log.Println("hello world")
	log.Println("你好")
	var p1 Person // var 声明变量 内存空间
	p1.Name = "Tom"
	p1.Age = 30

	var p2 = Person{Name: "张博扬", Age: 20}
	// p3 := Person{ Name: "Aaron", Age: 32}
	// format
	fmt.Println("p2=", p2)
	// 应用调bug 多打一些LOG
	log.SetFlags(log.Lshortfile | log.Ldate | log.Lmicroseconds)
	log.Printf("%s login, age: %d", u.Name, u.Age)
}
