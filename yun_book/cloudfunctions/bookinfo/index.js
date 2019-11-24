var cloud = require('wx-server-sdk');//云服务器
var rp = require('request-promise');//npm 向api发出请求
cloud.init();

exports.main = async(event,context) => {
  console.log((`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=d9a430e143c255303d335d726cb32cff`));
  var res = rp(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=d9a430e143c255303d335d726cb32cff`).then(html =>{
    return html;
  })
  return res;
}