/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
    const result = new Int16Array(nums.length - k + 1);
    const deque = [0];
    
    for (let i = 0, left = 0, right = 0; right < nums.length; right++) {
        while(deque[left] < right - k + 1) left++;
        while(left < deque.length && nums[deque.at(-1)] < nums[right]) deque.pop();
        deque.push(right)
        if (right >= k - 1) result[i++] = nums[deque[left]]
    }

    return result;
}