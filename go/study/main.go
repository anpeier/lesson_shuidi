package main

import (
	"anpeier.github.com/study/common"
	"github.com/gin-gonic/gin"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func main() {
	db := common.InitDB()
	defer db.Close()
	r := gin.Default()
	r = CollectRouter(r)
	r.Run() // listen and serve on 0.0.0.0:8080
}
