/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
    const nextGreater = new Map();
    const stack = [];
    
    for (const num of nums2) {
        while (stack.length > 0 && num > stack[stack.length - 1]) {
            nextGreater.set(stack.pop(), num);
        }
        stack.push(num);
    }
    
    while (stack.length > 0) {
        nextGreater.set(stack.pop(), -1);
    }
    
    return nums1.map(num => nextGreater.get(num));
}