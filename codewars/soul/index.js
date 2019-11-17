// creat Phone Number
// 编写一个函数 10个整数组成的数组(Array [0-9])
// 返回这些数字的格式 (123)456-7890

const creatPhoneNumber = (digits) =>{
    
    // return '('+digits[0]+digits[1]+digits[2]+')'+digits[3]+digits[4]+digits[5]
    //         +'-'+digits[6]+digits[7]+digits[8]+digits[9];

    // return`
    // (${digits[0]}${digits[1]}${digits[2]})${digits[3]}${digits[4]}${digits[5]}-${digits[6]}${digits[7]}${digits[8]}${digits[9]}
    // `

    //splice()方法切割数组，会影响原来数组
    // return `
    // (${digits.splice(0,3).join('')})${digits.splice(0,3).join('')}-${digits.splice(0,4).join('')}
    // `

    //slice()方法不影响原来数组
    return `
    (${digits.slice(0,3).join('')})${digits.slice(3,6).join('')}-${digits.slice(6,10).join('')}
    `
}
console.log(creatPhoneNumber([1,2,3,4,5,6,7,8,9,0]))
// (123)456-7890