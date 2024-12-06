/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1Cpy = nums1.slice(0, m);
    let i = m + n;

    while (i > 0) {
        i--;
        if (m > 0 && nums1Cpy[m - 1] >= nums2[n - 1]) {
            m--;
            nums1[i] = nums1Cpy[m];
        } else if (n > 0) {
            n--;
            nums1[i] = nums2[n];
        }
    }
};