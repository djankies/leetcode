/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const runningSums = [nums[0]]
  let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
      sum += nums[i];
      runningSums.push(sum);
    }
  return runningSums;
};