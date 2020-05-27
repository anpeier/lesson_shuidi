const webp = require('webp-converter');
webp.cwebp("sj.jpg", "sj.webp", "-q 50",
 function(status, error) {
  console.log(status, error);
})

// 原图 10% 左右轮廓 ， lazyload 加载完成后 替换上去
// img  src  ->  loading.gif logo 
// const lqip = require('lqip'); 
// const file = './in.png';
// lqip
//   .base64(file)
//   .then(res => {
//     console.log(res);
//   });