package middleware

import (
	"net/http"
	"strings"

	"anpeier.github.com/study/common"
	"anpeier.github.com/study/model"
	"github.com/gin-gonic/gin"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		tokenstring := ctx.GetHeader("Authorization")

		if tokenstring == "" || !strings.HasPrefix(tokenstring, "Bearer") {
			ctx.JSON(http.StatusUnauthorized, gin.H{"code": 401, "msg": "权限不足"})
			ctx.Abort()
			return
		}

		tokenstring = tokenstring[7:]
		token, claims, err := common.ParseToken(tokenstring)
		if err != nil || !token.Valid {
			ctx.JSON(http.StatusUnauthorized, gin.H{"code": 401, "msg": "权限不足"})
			ctx.Abort()
			return
		}

		// token 验证通过
		userId := claims.UserId
		DB := common.GetDB()
		var user model.User
		DB.First(&user, userId)

		// 用户不存在
		if user.ID == 0 {
			ctx.JSON(http.StatusUnauthorized, gin.H{"code": 401, "msg": "权限不足"})
			ctx.Abort()
			return
		}

		// 用户存在 写入上下文
		ctx.Set("user", user)
		ctx.Next()
	}
}
