/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    const count = new Map();
    let largestNum = -1;
    
    for (num of nums) {
        count.set(num, (count.get(num) ?? 0) + 1);
    }
    
    for (const [key, val] of count) {
        if (val === 1 && key > largestNum) largestNum = key; 
    }
    
    return largestNum;
};