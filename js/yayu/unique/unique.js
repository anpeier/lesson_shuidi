//数组去重
/**
 * 
 * @param {Array} arr 
 * @return {Array}
 * 
 */
//function unique(arr){ es5
//function 关键字去掉了，
//es6 箭头函数 () => {}
let fn;
console.log(typeof fn);//undefined
fn = null;
console.log(typeof fn);//null
fn = () =>{};
console.log(typeof fn);//function
const unique = (arr)=>{
    let res = [];//数组

    for(var i = 0, arrLen = arr.length; i < arrLen; i++){
        var current = arr[i];//基地 局部变量，缓存值
        if(res.indexOf(current) == -1){
            res.push(current);
        }
    }

    // for(var i = 0;i < arr.length; i++){
    //     //如果在res数组中 就不加入
    //     // var isIn = false;
    //     for(var j = 0;j < res.length; j++){
    //         if(arr[i] === res[j]){
    //             // isIn = true;
    //             break;
    //         }
    //     }
    //     //没有出现
    //     if(j === res.length){
    //         res.push(arr[i]);
    //     }
    //     //否则push res
    // }
    return res;
}
var　arr = ['1',2,3,4,2,1];
console.log(unique(arr));
console.log(typeof unique == 'function' && unique(arr));
