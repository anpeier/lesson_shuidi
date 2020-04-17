package common

import (
	"time"

	"anpeier.github.com/study/model"
	"github.com/dgrijalva/jwt-go"
)

var jwtKey = []byte("lap-first-go")

type UserClaims struct {
	UserId uint
	jwt.StandardClaims
}

func ReleaseToken(user model.User) (string, error) {
	exExpiresTimeDefault := time.Now().Add(1 * time.Hour)
	userClaims := UserClaims{
		UserId: user.ID,
		StandardClaims: jwt.StandardClaims{
			IssuedAt:  time.Now().Unix(),           // 签名生效时间
			ExpiresAt: exExpiresTimeDefault.Unix(), // 过期时间 一小时
			Issuer:    "anpeier",                   //签名的发行者
			Subject:   "user token",
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, userClaims)
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		return "", err
	}
	return tokenString, nil
}

func ParseToken(tokenString string) (*jwt.Token, *UserClaims, error) {
	userClaims := &UserClaims{}
	token, err := jwt.ParseWithClaims(tokenString, userClaims, func(token *jwt.Token) (i interface{}, err error) {
		return jwtKey, nil
	})
	return token, userClaims, err
}
