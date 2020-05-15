// 1. slice()
// let arr = [1, 2, {val: 4}];
// let newArr = arr.slice();
// newArr[2].val = 1000;

// console.log(arr);//[ 1, 2, { val: 1000 } ]

// 2. 
// const slowCopy = (target) => {
//   if(typeof target === 'object' && target !== null){
//     const cloneTarget = Array.isArray(target) ? [] : {}
//     for (const prop in target) {
//       if (target.hasOwnProperty(prop)) {
//         cloneTarget[prop] = target[prop]
//       }
//     }
//     return cloneTarget
//   }else {
//     return target
//   }
// }

// 3. object.assign()

let arr = [1, 2, {val: 4}];
let newArr = Object.assign(arr)
console.log(newArr)

