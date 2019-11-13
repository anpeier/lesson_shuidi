const nodemailer =require('nodemailer');
let transporter = nodemailer.createTransport({
    service:'qq',   //腾讯
    port:465,       //465端口
    secureConnection: true,
    auth:{
        user:'874609947@qq.com',
        pass:'beuazyghzakabfej'
    }

})
let mailOptions ={
    from:"光棍节前的呐喊<874609947@qq.com>",
    to:"1324315157@qq.com",
    subject :'双十一买什么',
    html:'<b>淘宝京东拼多多</b>'
}

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        return console.log(error);
    }
    console.log('Message send:%s',info.messageId);
})