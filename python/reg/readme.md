正则对象 在进行表单，字符串查找
Object RegObject ArrayObject ？
- /正则表达式/
- 字符进行表示
- [0-9] 范围
- {start,end} 长度
- ^ 表示以···开头 $ 表示以···结尾
- + 匹配一次或者多次
- \ 转义字符
- . 匹配除换行符以外的任意字符
- \w 匹配字母或数字或下划线或汉字 等价于 '[^A-Za-z0-9_]'。汉字视操作系统和应用环境而定
- \s 匹配任意的空白符
- \d 匹配数字
- \b 匹配单词的开始或结束
- /g 全局匹配

007 008 /^00\d[78]$/
匹配 010 119 112 ... \d{3}

010-123456