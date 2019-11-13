const TULING= require('tuling');

const aiTuling =new TULING({
    key:'da11027683c145c093ce4bbb773248e0'

});
//立即执行函数
(async()=>{
    //机器人
   // Console.log('arrow function') 
   const result = await aiTuling.send({
       userid: 1,
       info:'今天的天气',
       loc: '南昌市'
   });
   console.log(result);
})() 
//console.log(func);
//func();