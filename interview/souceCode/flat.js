// 数组扁平化

// flat()
const arr = [[1,2,3],[2,[3]]]
console.log(arr.flat(Infinity))

//序列化 + 正则
const arr = [1, [1,2], [1,2,3]]
const str = `[${JSON.stringify(arr).replace(/(\[|\])/g, '')}]`
JSON.parse(str)   // [1, 1, 2, 1, 2, 3]

let arr = [1, [1,2], [1,2,3]]
while (arr.some(Array.isArray)) {
  arr = [].concat(...arr);
}
