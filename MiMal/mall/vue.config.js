module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'https://www.imooc.com',
                changeOrigin: true,
                pathRewrite: {
                    '/api': '/'
                }
            }
        }
    }
}