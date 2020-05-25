// 查找a
function match(string) {
  for(let c of string){
    if(c === 'a') return true
  }
  return false
}

// 查找ab
function matchAb(string) {
  let foundA = false
  for (const c of string) {
    if(c === 'a'){
      foundA = true
    }else if(foundA && c === 'b') {
      return true
    }else {
      // 重新开始匹配
      foundA = false
    }
  }
  return false
}
console.log(matchAb('axbasb'))