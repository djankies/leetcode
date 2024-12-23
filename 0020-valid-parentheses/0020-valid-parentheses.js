/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false;

    const matches = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    const stack = [];

    for (const char of s) {
        if (matches[char]) {
            stack.push(char)
        } else {
            const opening = stack.pop();
            if (matches[opening] !== char) return false;
        }
    }

    return stack.length === 0;
};