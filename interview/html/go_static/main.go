package main

import (
	"fmt"
	"net/http"
	"os"

	"path/filepath"
	"text/template"

	"github.com/gin-gonic/gin"
)

type Product struct { // schema
	Id   int64  `json:"id"`
	Name string `json:"name"`
}

var (
	// 生成的html 保存目录
	htmlOutPath = "./tem"
	// 静态文件模板目录
	templatePath = "./tem"
)

// 数据
// 第一次去取，之和用生成的html1文件返回
var allproduct []*Product = []*Product{
	{1, "苹果"},
	{2, "华为"},
	{3, "小米"},
}

func main() {
	r := gin.Default()
	r.LoadHTMLGlob("tem/*")
	r.GET("/index", func(c *gin.Context) {
		GetGenerateHtml()
		c.HTML(http.StatusOK, "index.html", gin.H{
			"allproduct": allproduct,
		})
	})

	// 首页 商品页 /id.html seo  但是复杂
	r.GET("/index2", func(c *gin.Context) {
		c.HTML(http.StatusOK, "htmlIndex.html", gin.H{})
	})
	r.Run()
}

func GetGenerateHtml() {
	contentTmp, err := template.ParseFiles(filepath.Join(templatePath, "index.html"))
	if err != nil {
		fmt.Println("读取失败")
	}
	fileName := filepath.Join(htmlOutPath, "htmlIndex.html")
	generateStaticHtml(contentTmp, fileName, gin.H{
		"allproduct": allproduct,
	})
}

func generateStaticHtml(template *template.Template, fileName string, product map[string]interface{}) {
	file, err := os.OpenFile(fileName, os.O_CREATE|os.O_WRONLY, os.ModePerm)
	if err != nil {
		fmt.Println("错误")
	}
	defer file.Close()
	template.Execute(file, &product)
}
