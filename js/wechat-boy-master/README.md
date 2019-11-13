# wechat-boy
wechat boy是一个摸鱼产物，基于[Wechaty](https://github.com/Chatie/wechaty)，可以拿去撩妹纸或者家人，同学，同事等等。。。

代码风格使用es6，网络请求用的[axios](https://www.kancloud.cn/yunye/axios/234845)
## 现有功能
* 天气查询（聚合接口）
* 新闻查询（聚合接口）
* 图灵机器人聊天
* 每日播报天气，新闻

## 环境依赖
* Node.js > v10
## 快速开始
* git clone 整个项目
* npm install / yarn
* npm start
* 待控制台打印出二维码扫码登陆即可

<img src="./screenshot/login-qrcode.png" width="300">

## 配置项
```
// 天气查询接口
export const TIANQI_URL = 'http://op.juhe.cn/onebox/weather/query';
export const TIANQI_CITY = '深圳';
// key需要自行申请
export const TIANQI_KEY = '';
// 新闻查询接口
export const NEWS_URL = 'http://v.juhe.cn/toutiao/index';
// key需要自行申请
export const NEWS_KEY = '';
// 图灵机器人接口
export const TULING_API = 'http://www.tuling123.com/openapi/api';
// key需要自行申请
export const TULING_API_KEY = '';
export const TULING_ERROR_MESSAGE = '可爱小机器宕机啦 :>_<":';
//招呼语
export const HELLO_WORLD = 'Hello 可爱聪明的小机器人上线啦 :>_<:';
// 自己的昵称
export const MY_NAME = '@name';
// 想要发消息的人（备注）
export const CONTACT_ALIAS = 'alias';
// 想要发送消息的群组
export const ROOM_TPOIC = '富强民主和谐';
// 每分钟的第30秒： '30 * * * * *'
// 每小时的1分30秒 ：'30 1 * * * *'
// 每天的1点1分30秒 ：'30 1 1 * * *'
// 每月的1日1点1分30秒 ：'30 1 1 1 * *'
// 每周1的1点1分30秒 ：'30 1 1 * * 1'
// 详情见node_schedule文档
// 每天的8点0分0秒
export const SCHEDULE_CONFIG = '0 0 8 * * *';

// 是否使用本地数据，因为免费接口有次数限制，调试建议开启mock
export const MOCK = true;

// 开关图灵功能
export const ENABLE_TULING_MACHINE = false;

```
