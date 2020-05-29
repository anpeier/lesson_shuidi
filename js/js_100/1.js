// var a = 2; 变量的查询
// 视图找到变量的容器本省，从而对其赋值
// RHS查询 简单查找某个变量的值  =右侧
function changeObjProperty(o) { // o 形参是 LHS RHS查询
  o.siteUrl = "http://www.baidu.com";
  o = new Object();
  o.siteUrl = "http://www.google.com";
}

let webSite = new Object()
changeObjProperty(webSite)
console.log(webSite.siteUrl)