package main

import (
	"anpeier.github.com/study/controller"
	"github.com/gin-gonic/gin"
)

func CollectRouter(r *gin.Engine) *gin.Engine {
	r.POST("/api/register", controller.Register)
	return r
}
