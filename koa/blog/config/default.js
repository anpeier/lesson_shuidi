// 配置独立为一个模块
const config = {
    port:3000,
    database: {
        DATABASE: 'nodesql',
        USERNAME: 'root',
        PASSWORD: '1234567890',
        PORT: '3306',
        HOST: '192.168.31.128'
    }
}

module.exports = config;