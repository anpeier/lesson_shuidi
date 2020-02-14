const getAccessToken = require('./getAccessToken.js')
const rp = require('request-promise')

const callCloudDB = async(ctx, fnName, query = {}) => {
    const ACCESS_TOKEN = await getAccessToken()
    const options = {
        method: 'POST',
        uri: `https://api.weixin.qq.com/tcb/${fnName}?access_token=${ACCESS_TOKEN}`,
        body: {
          query,
          env: ctx.state.env,
        },
        json: true
    };

    return await rp(options)
    .then((res) => {
      return res
    })
    .catch(function (err) {
      // POST failed...
    })
}

module.exports = callCloudDB