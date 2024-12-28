
var StockSpanner = function() {
    this.deque = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let answer = 1;
    while (this.deque.length && this.deque.at(-1)[0] <= price) {
        answer += this.deque.pop()[1];
    }

    this.deque.push([price, answer]);
    return answer;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */