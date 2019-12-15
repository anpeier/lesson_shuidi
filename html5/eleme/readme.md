- 工作流
    script 强化开发
    dev 启动http服务
    styl stylus 编译为css
    json-server 商家信息

- dom api 是过去式
    MVVM {{}} js data:
    历史 切图仔 php/java + html/css 10年前 <%=message%> 前端不需要了解数据后端
    js 8年前 web2.0 fetch / ajax js 主动请求数据 前后端分庭抗礼
    4 年前 vue/react + node + flutter(客户端) + GO + docker 时代 MVVM 时代 连数据也要处理
    小程序和vue都是一样的 mvvm 优秀的地方在于简单
    - 天生集成数据驱动 data {{}} :src
    - 页面是响应式 数据变了,界面就会变

- inline-block 考点
    inline 没用设置宽高的能力 兄弟间相安无事
    block 兄弟间换行
    两列式布局 inline-block 
    副作用 兄弟间会产生间隙 
    浏览器实现inline-block的天坑 换行\n
    解决: 父元素font-size: 0
          两个元素首尾相连 </div></div>影响可读性

- stylus 向css提供了函数功能
    利用返回值的叫函数
    要复用css代码 完成了css模块化 mixin 混合

- 图片,手机的屏幕像素
    @media 条件 (-webkit-min-device-pixel-ration:3)
    图片命名 ...@2x.png ...@3x.png