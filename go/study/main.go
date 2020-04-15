package main

import (
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

type User struct {
	gorm.Model
	Userame   string `gorm:"type:varchar(20);not null"`
	Telephone string `gorm:"type:varchar(11);not null;unique"`
	Password  string `gorm:"size:255;not null"`
}

func main() {
	db := InitDB()
	defer db.Close()
	r := gin.Default()
	r.POST("/api/register", func(ctx *gin.Context) {
		// 获取参数
		username := ctx.PostForm("username")
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
		if len(username) == 0 {
			username = RandomString(10)
		}

		log.Println(username, telephone, password)

		if isTelephoneExist(db, telephone) {
			ctx.JSON(http.StatusUnprocessableEntity, gin.H{"code": 422, "msg": "用户已存在"})
			return
		}

		newUser := User{
			Userame:   username,
			Telephone: telephone,
			Password:  password,
		}

		db.Create(&newUser)

		ctx.JSON(200, gin.H{
			"msg": "注册成功",
		})
	})
	r.Run() // listen and serve on 0.0.0.0:8080
}

func isTelephoneExist(db *gorm.DB, telephone string) bool {
	var user User
	db.Where("telephone = ?", telephone).First(user)
	if user.ID != 0 {
		return true
	}
	return false
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

func InitDB() *gorm.DB {
	driverName := "mysql"
	host := "localhost"
	port := "3306"
	database := "gostudy"
	username := "root"
	password := "343356"
	charset := "utf8"
	args := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=%s&parseTime=True",
		username,
		password,
		host,
		port,
		database,
		charset)
	db, err := gorm.Open(driverName, args)
	db.CreateTable(&User{})
	if err != nil {
		panic("数据库连接失败: " + err.Error())
	}
	db.AutoMigrate(&User{})
	return db
}
