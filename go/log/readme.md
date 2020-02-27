1. json  struct 对比  go 声明一个类型， 用于
快速创建对象的做法，  模型
2. fmt log  打印输出
  ln  新的一行， 
  f  格式化输出
  fmt 输出
  log  日志模块   

const (
    Ldate         = 1 << iota     //日期示例： 2009/01/23
    Ltime                         //时间示例: 01:23:23
    Lmicroseconds                 //毫秒示例: 01:23:23.123123.
    Llongfile                     //绝对路径和行号: /a/b/c/d.go:23
    Lshortfile                    //文件和行号: d.go:23.
    LUTC                          //日期时间转为0时区的
    LstdFlags     = Ldate | Ltime //Go提供的标准抬头信息
)