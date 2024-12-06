/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const n = nums.length;
  const consecutiveSum = n * (n + 1) / 2;
  const numsSum = nums.reduce((acc, curr) => acc + curr);
  return consecutiveSum - numsSum;
};