/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const stack = [];
    const answer = [];

    for (let i = 0; i < k; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
            stack.pop();
        }

        stack.push(i);
    }
    
    answer.push(nums[stack[0]]);
    
    for (let i = k; i < nums.length; i++) {
        if (stack[0] < i - k + 1) stack.shift();
        while (nums[stack[stack.length - 1]] < nums[i]) {
            stack.pop()
        }

        stack.push(i)
        answer.push(nums[stack[0]]);
    }

    return answer;

    
};