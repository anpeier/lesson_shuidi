const getAccessToken = require('./getAccessToken.js')
const rp = require('request-promise')

const callCloudFn = async(ctx, fnName, params) => {
    const ACCESS_TOKEN = await getAccessToken()
    const query = ctx.request.query
    const options = {
      method: 'POST',
      uri: `https://api.weixin.qq.com/tcb/invokecloudfunction?access_token=${ACCESS_TOKEN}&env=${ctx.state.env}&name=${fnName}`,
      body: {
        ...params
      },
      json: true // Automatically stringifies the body to JSON
    };

    return await rp(options)
    .then((res) => {
      // console.log(res)
      return res
    })
    .catch(function (err) {
      // POST failed...
    })
}

module.exports = callCloudFn