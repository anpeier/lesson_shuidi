## 路由相关钩子事件
routeChangeStart(url) -路由开始切换时触发
routeChangeComplete(url) -完成路由切换时触发
routeChangeError(err, url) -路由切换报错时触发 404不算错误
beforeHistoryChange(url) -浏览器历史模式开始切换时触发
hashChangeStart(url) -开始切换hash值但是没有切换页面路由时触发
hashChangeComplete(url) -完成切换hash值但没有切换页面路由时触发