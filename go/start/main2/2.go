package main
import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {
	fmt.Println("node 向GO 牵， express作者 去写GO了, docker是用GO")
	url := "https://juejin.im/timeline" //声明变量
	download(url) //爬虫 交给一个download方法
}

func download(url string) { //node js弱类型 go 强类型  
	client := &http.Client{}  // node new   http客户端 client server  实例化一个{}   { } & 取地址  
	req, _ := http.NewRequest("GET", url, nil) //同步

	req.Header.Set("User-Agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)") // node writeHeader
	resp, err := client.Do(req) // 去请求

	if err != nil {
		fmt.Println("http get error", err)
		return
	}
	// http 一来一回 请求体  请求头， 响应体 响应头
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("read error", err)
		return
	}

	fmt.Println(string(body))
}