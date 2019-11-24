// 设计一个栈 Stack
// 支持 push，pop，top 操作，并能在常数时间内检索到最小元素。
//     push(x) -- 将元素 x 推入栈中。
//     pop() -- 删除栈顶的元素。
//     top() -- 获取栈顶元素。
//     getMin() -- 检索栈中的最小元素。

  var MinStack = function() {
    this.stack = [];
    this.min = [];
    this.minindex = [];
  }; 
  MinStack.prototype.push = function(x) {
    this.stack.push(x)
    if (this.min.length === 0 || this.getMin() > x) {
      this.min.push(x)
      this.minindex.push(this.stack.length - 1)
    }
  };
  MinStack.prototype.pop = function() {
    if (this.top() === this.getMin() && this.minindex[this.minindex.length - 1] === this.stack.length - 1) {
      this.min.pop()
      this.minindex.pop()
    }
    this.stack.pop()
  };
  
  
  MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
  };
  
  MinStack.prototype.getMin = function() {
    return this.min[(this.min.length - 1)]
  };
  MinStack.prototype.toString = function(){
    return this.stack.join(',');
  }
var stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.toString())
console.log(stack.getMin());
stack.pop();
stack.pop();
console.log(stack.toString())
console.log(stack.getMin());