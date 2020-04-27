// 在数据获取的时候没有选择深拷贝内容，
// 对于引用类型进行处理会有问题
// 这里只是演示简化了一点
function Iterdtor(arr){
	let data = [];
    if(!Array.isArray(arr)){
        data = [arr];
    }else{
        data = arr;
    }
    let length = data.length;
    let index = 0;
    // 迭代器的核心next
    // 当调用next的时候会开始输出内部对象的下一项
    this.next = function(){
    	let result = {};
    	result.value = data[index];
    	result.done = index === length-1? true : false;
    	if(index !== length){
            index++;
            return result;
    	}
    	// 当内容已经没有了的时候返回一个字符串提示
    	return 'data is all done'
    };
}
let arr = [1,2,3,4,5,6];
// 生成一个迭代器对象。
let iterdtor = new Iterdtor(arr);
iterdtor.next()
iterdtor.next()
