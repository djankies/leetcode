/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const letters = new Map();
    let longest = 0;
    let left = 0;
    
    for (let right = 0; right < s.length; right++) {
        if (letters.has(s[right])) {
            left = Math.max(left, letters.get(s[right]) + 1);
        }
        
        letters.set(s[right], right);
        longest = Math.max(longest, right - left + 1);
    }
    
    return longest;
};