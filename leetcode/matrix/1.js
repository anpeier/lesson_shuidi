var matrix = function (n) {
    let len = Math.ceil(n / 2)
    let arr = []
    let temp = []
    for (let i = len-1; i >= 0; i--) {
        arr[i] = []
        t = i
        for (let j = len-1; j >= 0; j--) {
            if (i + j < len-1) {  
                arr[i][j] = 0
            }else{
                arr[i][j] = len - t
                t --
            }
            
        }
    }
    for (let i = 0; i < len; i++) {
        // 数组拷贝(copy) 原数组不受影响
        temp = [...arr[i]].reverse().splice(1)
        arr[i] = arr[i].concat(temp)
        // console.log(arr[i])
    }
    temp = [...arr].reverse().splice(1)
    arr = arr.concat(temp)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
    return arr
}

matrix(7)