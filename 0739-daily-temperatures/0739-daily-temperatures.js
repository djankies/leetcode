/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const answer = new Array(temperatures.length).fill(0);
    const stack = [];
    
    for (let i = 0; i < temperatures.length; i++) {
        let j = i;
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            j = stack.pop();
            answer[j] = i - j;
        }

        stack.push(i)
    }

    return answer;
};
