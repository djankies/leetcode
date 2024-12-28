/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.windowSize = size;
    this.queue = [];
    this.sum = 0;
    
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.queue.push(val);
    this.sum += val;
    if (this.queue.length > this.windowSize) {
        const removed = this.queue.shift();
        this.sum -= removed;
    }

    
    const divisor = Math.min(this.queue.length, this.windowSize);
    
    return this.sum / divisor;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */