const phoneReg = /1[35789]\d{9}/; // 匹配规则定义 正则表达式 
console.log(phoneReg.test('xiaoan: 18979113281'))
console.log(typeof phoneReg);

const num = /00[78]/
console.log((num.test('008')))

const phone = /\d{3}-\d{5,8}/
console.log((phone.test('010-1234567')))
