1. node 插入一条 qrcode 记录，{qrcode_id,expires_at,create_at} 生成一个二维码图片
2. PC端登录页，二维码，显示出来


PC 端扫码登陆方案，并需要传递哪些信息

1. 头条懂车帝，比较复杂的业务考题
   jwt(cookie session) 轮询怎么做 mongodb 二维码（node） 扫码登录
2. node 前端 登录 api 的业务分开理解

3. 二维码 一段信息的图片 node qrcode 生成
4. 微信 APP （uniapp，RN） 手机微信登录了，扫码，

- 手机 APP 微信，GitHub QQ 已经登录（前提） cookie（token）
  头像 id 用户名 => 二维码里 等待着头像，id，用户名（发送 ajax 请求）

1. 二维码里 mongodb 存 qrcode_id time expires node，qrcode
2. 手机扫码时，已登录，token(cookie) 把 token 给二维码，触发一个 Ajax post 请求到服务端， token qrcode_id 解析出来用户 user_id
3. mongodb 二维码，登录中，user 信息，token 也传给 PC 页面，也登陆成功了
4. 跳转 已登录成功

- 扫一下 APP 里 用户头像，id，登录状态 都传到了 PC 端
- 结果是 PC 站登录了
  服务器端要认识你是谁，token oAuth 代替 cookie
