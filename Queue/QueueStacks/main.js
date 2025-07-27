
var MyQueue = function () {
    //this is
    this.item = []
    this.itemOutput = []
};
/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.item.push(x)
};
/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    this.peek()
    return this.itemOutput.pop()
};
/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.itemOutput.length === 0) {
        while (this.item.length > 0) {
            this.itemOutput.push(this.item.pop())
        }
    }
    return this.itemOutput[this.itemOutput.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.item.length === 0 && this.itemOutput.length === 0
};

MyQueue.prototype.print = function () {
    console.log(this.item.join(" => "))
}
const myqueue = new MyQueue()

myqueue.push(1); // queue is: [1]
myqueue.push(3);
myqueue.push(5);
myqueue.push(6);
myqueue.push(7);
myqueue.pop();
myqueue.print()