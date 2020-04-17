package controller

import (
	"log"
	"net/http"

	"anpeier.github.com/study/common"
	"anpeier.github.com/study/model"
	"anpeier.github.com/study/utils"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

func Register(ctx *gin.Context) {
	// 获取参数
	username := ctx.PostForm("username")
	telephone := ctx.PostForm("telephone")
	password := ctx.PostForm("password")

	DB := common.GetDB()

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
		username = utils.RandomString(10)
	}

	log.Println(username, telephone, password)

	if isTelephoneExist(DB, telephone) {
		ctx.JSON(http.StatusUnprocessableEntity, gin.H{"code": 422, "msg": "用户已存在"})
		return
	}

	newUser := model.User{
		Userame:   username,
		Telephone: telephone,
		Password:  password,
	}

	DB.Create(&newUser)

	ctx.JSON(200, gin.H{
		"msg": "注册成功",
	})
}

func isTelephoneExist(DB *gorm.DB, telephone string) bool {
	var user model.User
	DB.Where("telephone = ?", telephone).First(user)
	if user.ID != 0 {
		return true
	}
	return false
}
