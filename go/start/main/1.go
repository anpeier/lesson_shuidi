// 函数声明
package main 
import (
	"fmt"   // node 里require('fs')
	"net/http" // node require('http')
	"io/ioutil"
)
// Go 是新时代的C java过时了
// python 人工智能时代
// js 运行宿主
func main() {  
	fmt.Println("hello world")
	// 爬虫 go  node 对比性学习
	// cheerio  第三方npm  go get 
	// http 请求  fs 写入文件
	// node http.get   回调方式  
	// 同步 阻塞
	resp, err := http.Get("https://juejin.im/timeline") //:= 花时间
	if err != nil { // node null => nil if 不要括号
		fmt.Println("http get error", err)
		return
	}
	// fmt.Println(resp)
	// 网络IO 端口， 进来 
	// 文件IO 读入文件
	// resp Body ?响应体
 	body, err := ioutil.ReadAll(resp.Body) // go 库 ioutil
	// body, err := 
	if err != nil {
		fmt.Println("read over")
		return 
	}
	fmt.Println(string(body))
}