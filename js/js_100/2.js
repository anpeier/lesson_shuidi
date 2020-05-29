// 深拷贝 考虑对象相互引用以及symbol拷贝的情况
// var deepCopy = function (obj) {
//   if (typeof obj !== "object") return;
//   var newObj = obj instanceof Array ? [] : {};
//   for (var key in obj) {
//     console.log(key);
//     if (obj.hasOwnProperty(key)) {
//       newObj[key] =
//         typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
//     }
//   }
//   return newObj;
// };

function deepCopy(obj) {
  var newObj;
  if (obj === null) return obj;

  let t = typeof obj;
  // 简单数据类型 复杂数据类型
  switch (t) {
    case "string":
    case "number":
    case "boolean":
    case "undefined":
      return obj;
  }

  if (Array.isArray(obj)) {
    newObj = [];
    for (const item of obj) {
      newObj.push(deepCopy(item));
    }
  } else {
    newObj = {};
    if (Object.prototype.toString.call(obj) === "[object object]") {
      // WeakMap WeakSet
      Object.getOwnPropertyNames(obj)
        .concat(Object.getOwnPropertySymbols(obj))
        .forEach((c) => {
          newObj[c] = deepCopy(obj[c]);
        });
    } else {
      newObj = obj;
    }
  }
  return newObj;
}

var b = [1, [5, 6]];

var a = {
  a: "1",
  b: [1, 2, 3, 4, { t: "test" }],
  [Symbol()]: "symbol",
  d: new Date(),
  r: RegExp("^\\d$"),
};

console.log(deepCopy(b));
