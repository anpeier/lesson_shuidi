require("./style/index.css");
// 引入css文件 webpack bundle 一切静态资源
// 1 const es6 -> es5 env
const h2 = document.createElement("h2");
h2.innerText = "laplaplap";
h2.className = "lap";
// 3 挂载点 html template
document.body.append(h2);
