import "strings"

func reverseWords(s string) string {
	var reserseSeg []string
	//分割字符串
	seg := strings.Fields(s)
	//反转字符串数组
	for i := len(seg) - 1; i >= 0; i-- {
		reserseSeg = append(reserseSeg, seg[i])
	}
	//将字符串数组里的元素拼接成一个字符串并返回
	return strings.Join(reserseSeg, " ")
}
