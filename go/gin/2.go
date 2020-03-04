package main //module

// import "fmt"
// gin 第三方模块github.com    npm
import "github.com/gin-gonic/gin"

// 代码里绝不会有垃圾

func main() { //入口
	// go gin web 引擎
	engine := gin.Default() //  const app = express()
	engine.GET("/", func(context *gin.Context) {
		//context koa ctx  express req + res
		// res.send()
		// int -> ?
		context.String(200, "hello gin get method")
	})
	_ = engine.Run() // node listen  8080
}
