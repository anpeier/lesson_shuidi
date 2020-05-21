package main

import (
	"fmt"
	"unicode/utf8"
)

func main() {
	s := "Yes我爱你!" // UTF-8
	for _, b := range []byte(s) {
		fmt.Printf("%X ", b)
	}
	fmt.Println()
	fmt.Println(len(s)) // 13

	for i, ch := range s { // ch is a rune
		// (0 59)(1 65)(2 73)(3 6211)(6 7231)(9 4F60)(12 21)
		fmt.Printf("(%d %X)", i, ch)
	}
	fmt.Println()

	fmt.Println(utf8.RuneCountInString(s))
	bytes := []byte(s)
	for len(bytes) > 0 {
		ch, size := utf8.DecodeRune(bytes)
		bytes = bytes[size:]
		fmt.Printf("%c ", ch)
	}
	fmt.Println()

	// rune 相当于char
	for i, ch := range []rune(s) {
		fmt.Printf("(%d %c)", i, ch)
	}
	fmt.Println()
}
