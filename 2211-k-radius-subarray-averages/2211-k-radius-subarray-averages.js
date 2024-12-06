/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
  const n = nums.length;
  const averages = new Array(n).fill(-1);
  const windowSize = 2 * k + 1;

  if (n < windowSize) return averages;

  let windowSum = 0;

  for (let i = 0; i < windowSize; i++) {
    windowSum += nums[i];
  }

  for (let i = k; i < n - k; i++) {
    averages[i] = Math.floor(windowSum / windowSize);

    if (i + k + 1 < n) {
      windowSum += nums[i + k + 1] - nums[i - k];
    }
  }

  return averages;
};