/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const counts = new Map();

    for (arr of nums) {
        for (num of arr) {
            counts.set(num, (counts.get(num) ?? 0) + 1);
        }
    }

    const result = [];
    for (const [key, val] of counts) {
        if (val === nums.length) result.push(key);
    }

    return result.sort((a, b) => a - b);
};