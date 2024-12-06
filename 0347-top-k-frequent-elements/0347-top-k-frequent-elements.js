/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const countMap = {};

    for (num of nums) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    const keys = Object.keys(countMap);

    return keys.sort((a, b) => {
        return countMap[b] - countMap[a];
    }).slice(0, k).map(key => Number(key));






};