/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = nums => nums.length !== new Set(nums).size
