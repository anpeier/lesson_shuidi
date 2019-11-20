- 数据可视化
- 使用requestAnimationFrame 请求运动帧
游戏开发中使用requestAnimationFrame代替setInterval
    function animation(){
        requestAnimationFrame(function(){
            // console.log('-----');
            requestAnimationFrame(function){
                animation();//递归 自己调用自己 内存泄漏
            }              
        });
    }

- canvas 是画布 绘制API 画布默认大小？
canvas.style.width 标准的 100vw
canvas.width html属性 不接受单位，只接受数值
ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillText(2,100,100);
requestAnimationFrame + clearRect();