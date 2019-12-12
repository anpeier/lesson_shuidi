// email 正则表达式
// 1490343356@qq.com
console.log(/^[\w-]+@[\w-]+\.[\w-]+$/.test("1490343356@qq.com"))

console.log(/^[\w-]+@[\w-]+(\.[\w-]+)+$/.test("1490343356@qq.com.cn"))