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

    const stack = [s[0]];

    for (let i = 1; i < s.length; i++) {
        if (matches[s[i]]) {
            stack.push(s[i])
        } else {
            const opening = stack.pop();
            if (matches[opening] !== s[i]) return false;
        }
    }

    if (stack.length === 0) return true;
    return false;
};