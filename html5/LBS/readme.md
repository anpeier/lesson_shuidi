1. host 配置
    在本地支持www.taobao.com
    - 修改本地localhost
        C:\Windows\System32\drivers\etc
    www.taobao.com -> ip 
    在本地域名缓存中先查找 访问过 本地会缓存
    IP 主机逻辑地址
    运营服务商 询问 www域名系统

    host 先来这里查找 程序员来设置
    www.taobao.com 本地

    - 如何干掉8080
        nginx
        vue vue.config.js proxy 8080
        /api/users/create -> proxy <---> 3000

        反向代理 www.taobao.com:80 www.taobao.com default_port 80
        nginx 是高性能的http服务器
        配置下反向代理
        :80 default 不用加 www.taobao.com 默认使用80端口提供服务
        8080 live-server 由80端口反向代理