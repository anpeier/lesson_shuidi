package main

import "github.com/gin-gonic/gin" //安装了gin web 框架
import "fmt"
import "net/http"  // status code  

func main() {
	// 上传文件
	router := gin.Default() // 返回咱由对象
	//context req + res koa  ctx
	router.POST("/upload", func(c *gin.Context) {
		// 不使用GET input file 
		file, _ := c.FormFile("file") //真正的文件 res body file
		// 200 
		// 返回的是String res.end
		c.SaveUploadedFile(file, file.Filename)
		c.String(http.StatusOK, fmt.Sprintf("'%s' uploaded!", file.Filename))

	})
	router.Run(":8888")
	// r := gin.Default()  // node new Koa()  r 相当于我们的web app
	// //路由GET请求 c Context 
	// r.GET("/ping", func(c *gin.Context) {//路上 node context
	// 	c.JSON(200, gin.H{ //返回json   gin.H json格式化的简写
	// 		"message": "pong",
	// 	}) //bilibili GO
	// })  
	// r.Run(":8888")
}