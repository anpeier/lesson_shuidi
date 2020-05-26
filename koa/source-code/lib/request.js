let url = require("url");
let request = {
  get url() {
    // 不用原生的req，用ctx.request.url
    // console.log(this)
    return this.req.url; // this
  },
  get path() {
    return url.parse(this.req.url).pathname;
  },
  get query() {
    return url.parse(this.req.url).query;
  },
};
module.exports = request;
