package main //包
// node_mail go email
import (
	"log"
	"net/smtp"

	"github.com/jordan-wright/email"
)

func main() { // 入口函数
	e := email.NewEmail() // := 定义并且附值
	e.From = "anpeier <1490343356@qq.com>"
	// [] ? Array? 多个用户发邮件 { }集合
	e.To = []string{"1810588338@qq.com"}
	e.Subject = "晶崽崽？" //标题
	// byte? go 类型 byte
	e.Text = []byte("我想你了") //内容
	e.HTML = []byte(`
		<a onclick="alert('猪婆')">点击一下有惊喜</a>
	`)
	e.AttachFile("头像.jpg")
	err := e.Send("smtp.qq.com:25", smtp.PlainAuth("", "1490343356@qq.com", "sqblzzwgcbnbiddg", "smtp.qq.com"))
	if err != nil {
		log.Fatal(err)
	}
}
