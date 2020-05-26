// 上下文
let proto = {};
function defineGetter(prop, name) {
  // 代理给 ctx.req
  proto.__defineGetter__(name, function () {
    return this[prop][name];
  });
}
defineGetter("request", "url");
defineGetter("request", "path");
module.exports = proto;
