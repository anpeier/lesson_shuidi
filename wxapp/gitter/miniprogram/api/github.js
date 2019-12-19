const trendings = (since, language) => new Promise((resolve, reject) => {
    // 有一个请求
    if(language = 'all') {
        language: '';
    }
    const url = 'https://github-trending-api.now.sh/repositories';
    wx.request({
        url,
        success(res) {
            // console.log(res);
            const trends = res.data.map(it => {
                it.stargazers_count = it.stars;
                it.full_name = `${it.author}/${it.name}`;
                return it;
            })
            resolve(trends);
        },
        fail() {
            reject(); // 失败
        }
    })
})
module.exports = {
    trendings
}