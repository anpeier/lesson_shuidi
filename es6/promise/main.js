const fs = require('fs');
// // 设置编码格式
// fs.readFile('a.txt', 'utf-8', function(err, data) {
//     // 读取文件失败/错误
//     if (err) {
//         console.log(err);
//         return;
//     }
//     // 读取文件成功
//     console.log(data.toString());
// 　　//直接用console.log(data);也可以
// });

function readFile(){
    // a
    // b
    // c

    // fs.readFile('a.txt',function(err,data){
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(data.toString());
    //     fs.readFile('b.txt',function(err,data){
    //         if(err){
    //             console.log(err);
    //         }
    //         console.log(data.toString());
    //         fs.readFile('c.txt',function(err,data){
    //             if(err){
    //                 console.log(err);
    //             }
    //             console.log(data.toString());
    //         })
    //     })
    // })

    const aFile = fs.readFileSync('a.txt');
    console.log(aFile.toString());
    const bFile = fs.readFileSync('b.txt');
    console.log(bFile.toString());
    const cFile = fs.readFileSync('c.txt');
    console.log(cFile.toString());

}
readFile();