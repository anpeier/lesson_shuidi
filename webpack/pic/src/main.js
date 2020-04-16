import "./style/main.css"; // 依赖关系
import "./style/main.styl";
import "./style/font.css";
let $body = document.querySelector("body");
console.log("ssssss");
// 字体
$body.append(document.createElement("br"));
let $fontTitle = document.createElement("h1");
$fontTitle.innerHTML = "字体";
$body.append($fontTitle);

let $fontWrapper = document.createElement("div");

let $font = document.createElement("i");
$font.className = "iconfont";
$font.innerHTML = "&#xe609;";

$fontWrapper.append($font);
$body.append($fontWrapper);
