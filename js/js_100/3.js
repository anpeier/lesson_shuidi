// parseInt cb map item,index,arr 数组本身
console.log(["1", "2", "3"].map(parseInt)); // 结果 [1,NaN,NaN]

// 有个什么需求？ js的函数化能力
// 如何确保函数在运行时，只接受一个参数，控制函数参数数量的能力
let unary = (fn) => (val) => fn(val); // 返回了只接收一个参数的函数
let parse = unary(parseInt);
console.log(["1", "2", "3"].map(parse));
