/**
设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。
示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/min-stack
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
最小值
当前最小值入栈
当遇到更小的一个值时
将更小的值入栈
并更新当前最小值
出栈时
如果出栈值是当前最小值的话，那么它的上一个入栈元素即为上一个最小值
再出栈一次的值即为出栈后更新的最小值了
例如
原入栈值：[3,4,2]
Min([3]) = 3
Min([3，4]) = 3
Min([3，4，2]) = 2
实际入栈：[3,3,4,2,2]
出栈
2 == 2
当前最小值 = 2 (第1个)
[3,3,4]

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.min = Number.MAX_SAFE_INTEGER;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    // 当前值比min值更小
    if(this.min >= x){
        // 将上一个min最小值保存入栈
        this.stack.push(this.min);
        // 更新当前最小值
        this.min = x;
    }
    this.stack.push(x);
}
/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // 如果弹出值 == 当前最小值，那么再弹一次的值为上一个最小值也即出栈后更新的最小值
    if(this.stack.pop() == this.min){
        this.min = this.stack.pop();
    }
}
/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */