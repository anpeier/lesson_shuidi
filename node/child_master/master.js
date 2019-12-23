// 主进程
const cp = require('child_process'); // 创建子进程
const child_process = cp.fork(__dirname + '/child.js'); // 启动子进程
child_process.send('haha'); // 有些任务要交给他
child_process.on('message', (str) => {
    console.log('parent', str);
})