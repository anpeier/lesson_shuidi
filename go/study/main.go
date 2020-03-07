package main

import (
	"math/rand"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.POST("/api/register", func(ctx *gin.Context) {
		// 获取参数
		name := ctx.PostForm("name")
		telephone := ctx.PostForm("telephone")
		password := ctx.PostForm("password")

		// 数据验证
		if len(telephone) != 11 {
			ctx.JSON(http.StatusUnprocessableEntity, gin.H{"code": 422, "msg": "请输入正确的手机号"})
			return
		}
		if len(password) < 6 {
			ctx.JSON(http.StatusUnprocessableEntity, gin.H{"code": 422, "msg": "密码必须大于6位"})
			return
		}
		if len(name) == 0 {
			name = RandomString(10)
		}
		ctx.JSON(200, gin.H{
			"msg": name,
		})
	})
	r.Run() // listen and serve on 0.0.0.0:8080
}
func RandomString(n int) string {
	var letters = []byte("asdfghjklqweryuiopzxcvbnmASDGFHJLKPOIUYRTEW")
	result := make([]byte, n)

	//不加Seed返回的是伪随机数
	rand.Seed(time.Now().UnixNano())
	for i := range result {
		result[i] = letters[rand.Intn(len(letters))]
	}
	return string(result)
}
