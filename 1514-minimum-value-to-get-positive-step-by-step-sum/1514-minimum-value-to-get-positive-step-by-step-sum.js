/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  const prefixArray = [nums[0]];
  let sum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    prefixArray.push(sum);
  }
  
  let minValue = Math.min(...prefixArray);
  
  if (minValue < 1) return 1 - minValue;
  return 1;
};