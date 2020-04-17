package utils

import (
	"math/rand"
	"time"
)

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
