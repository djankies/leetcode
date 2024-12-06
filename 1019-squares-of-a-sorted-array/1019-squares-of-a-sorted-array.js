/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    const result = new Array(nums.length);
    let k = nums.length - 1;

    while (i <= j) {
        const left = Math.abs(nums[i]);
        const right = Math.abs(nums[j]);

        if (left > right) {
            result[k] = left * left;
            i++;
        } else {
            result[k] = right * right;
            j--;
        }
        k--;
        
    }
    
    return result;
};