package main

import (
	"anpeier.github.com/study/controller"
	"anpeier.github.com/study/middleware"
	"github.com/gin-gonic/gin"
)

func CollectRouter(r *gin.Engine) *gin.Engine {
	r.POST("/api/register", controller.Register)
	r.POST("/api/login", controller.Login)
	r.GET("/api/auth/info", middleware.AuthMiddleware(), controller.Info)
	return r
}
