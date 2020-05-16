// 寻找最长不含重复字符的字串

package main

import "fmt"

// 首先设不重复字符串起始位置start为0，在遍历过程中，将字符出现的位置保存在map中。
// 若出现重复字符（设当前位置为i）, 则计算当前不重复字符串长度(i - start)并考虑是否更新res, 同时更新start为map.get(c) + 1, 其中c为重复字符串。
// 不需要清除位置已经失效的字符，而是在出现重复字符时，判断已经存在的字符的位置是否大于本次计算的起始位置（start）。
// 若大于，则表示出现了重复字符
// 否则忽略
// 如：abcdbefg，当第二个b出现时，无需在map中删除c和d的位置信息。

func lengthOfNoRepeatSubStr(s string) int {
 lastOccurred := make(map[byte]int)
	start := 0
	maxLength := 0
	for i, ch := range []byte(s) {
		if lastI, ok := lastOccurred[ch]; ok && lastI >= start {
			start = lastI + 1
		}
		if i - start+1 > maxLength {
			maxLength = i-start+1
		}
		lastOccurred[ch] = i
	}
	return maxLength
}

func main()  {
	res := lengthOfNoRepeatSubStr("abcabca")
	fmt.Println(res)
}