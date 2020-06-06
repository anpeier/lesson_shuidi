// 函数声明
// function add(x: number, y: number, z?: number, k:number = 10): number {
//   // console.log(typeof(typeof z)) // string
//   if (typeof z === "number") {
//     return x + y + z;
//   } else {
//     return x + y;
//   }
// }
// let res = add(2, 3, 5);

// 函数表达式
const add = function (x: number, y: number, z?: number): number {
  // console.log(typeof(typeof z)) // string
  if (typeof z === "number") {
    return x + y + z;
  } else {
    return x + y;
  }
};

const add2: (x: number, y: number, z?: number) => number = add;
