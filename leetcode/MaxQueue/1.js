// 请定义一个队列并实现函数 max_value 得到队列里的最大值，
// 要求函数max_value、push_back 和 pop_front 的时间复杂度都是O(1)。
// 若队列为空，pop_front 和 max_value 需要返回 -1

var MaxQueue = function() {
    this.queue = []
    this.maxValue = -Infinity
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    return !this.queue.length?-1:this.maxValue
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value)
    if (value>this.maxValue) {
        this.maxValue = value
    }
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(!this.queue.length) return -1
    let value = this.queue.shift()
    if (this.maxValue == value) {
        this.maxValue = Math.max(...this.queue)
    }
    return value
};