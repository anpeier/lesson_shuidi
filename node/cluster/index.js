const cluster = require('cluster'); // 多进程
const os = require('os');
// console.log(os.cpus().length);
if(cluster.isMaster) {
    for(let i = 0; i < os.cpus().length / 2; i++) {
        // 不做具体执行
        cluster.fork();
    }
    cluster.on('listening',function(worker,address){
        console.log('listening: worker ' + worker.process.pid + ', Address: ' + address.address + ", port:" + address.port);
    });
}else {
    require('./app');
}