/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const counts = new Map([[0, -1]]);
    let count = 0;
    let max = 0;
    
    for (let i = 0; i < nums.length; i++) {
        count += nums[i] === 1 ? 1 : -1;
        if (counts.has(count)) max = Math.max(max, i - counts.get(count));
        else counts.set(count, i);
    }
    
    return max;
};