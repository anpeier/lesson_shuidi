// function list(names) {
//     var len = names.length//3
//     var arr = names.map(function(val, index) {
//       if(index < len-2) {
//         return val.name + ', '
//       } else if (index === len-2) {
//         return val.name + ' & '
//       } else {
//         return val.name
//       }
//     })
//     return arr.join('');
// }

function list(names){
    return names.length ? names.slice(1).reduce((pre, current, index) => {
      return pre + (index<names.length-2 ? ', ' + current.name : ' & ' + current.name)
    }, names[0].name) : ''
  }
// function list(names) {//有问题
//     return names.reduce((prev, curr, i) => {
//       return prev + curr + (i<names.length-2) ? ', ' : i===names.length-2 ? ' & ' : ''
//     }, '')
//   }
console.log(list([{name:'a'},{name:'a'},{name:'a'}]));