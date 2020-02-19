let template = '我是{{name}}, 年龄{{age}}, 性别{{sex}}'; //待编译的模版

let data = {
  name: '蔡徐坤',
  age: 18
}

function render(template, data) {
  const reg = /\{\{(\w+)\}\}/; //不做贪婪匹配
  if (reg.test(template)) {  //退出条件
    //是否需要翻译
    //vue 源码里模板编译用的正则方法
    const key = reg.exec(template)[1];
    console.log(key);
    template = template.replace(reg, data[key]);
    return render(template, data); //递归
  }
  return template;
  // 用什么方法？ 
  // 正则 + replace {{}} 规则
  // 1. {{(?)+}}
  // 2. $1   data[key] 
  // 3. replace 替换
}
console.log(render(template, data));

// vue 的第一个功能render() 
// new Vue({
//   el: '#app',
//   data() {
//     return {
        //   name: ''
//     }
//   }
// })