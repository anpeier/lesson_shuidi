var mostCommonWord = function(paragraph, banned) {
    let arr=paragraph.toLowerCase().match(/\w+/g);
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        if(!banned.includes(arr[i])){
            let count=map.get(arr[i])===undefined?0:map.get(arr[i]);
            map.set(arr[i],++count);
        }
    }
    let key=Array.from(map);
    key.sort(function(a,b){
        return b[1]-a[1]
    })
    return key[0][0]
};
