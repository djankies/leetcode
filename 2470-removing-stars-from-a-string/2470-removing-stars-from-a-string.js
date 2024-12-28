/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = [];

    for (const char of s) {
        if (stack.length && char === '*') {
            stack.pop();
        } else {
            stack.push(char)
        }
    }

    return stack.join('');
};