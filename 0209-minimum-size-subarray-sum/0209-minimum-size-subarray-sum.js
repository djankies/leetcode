/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let n = nums.length;
    let minLength = n + 1;
    let windowSum = 0;

    for (let right = 0; right < n; right++) {
        windowSum += nums[right];

        while (windowSum >= target) {
            minLength = Math.min(minLength, right - left + 1)
            windowSum -= nums[left];
            left++;
        }
    }

    return minLength > n ? 0 : minLength;
};