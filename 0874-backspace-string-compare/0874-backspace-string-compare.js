/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const stackS = [];
    const stackT = [];

    for (const char of s) {
        if (char === '#') {
            stackS.pop();
        } else {
            stackS.push(char);
        }
    }

    for (const char of t) {
        if (char === '#') {
            stackT.pop();
        } else {
            stackT.push(char);
        }
    }

    return stackT.join('') === stackS.join('');
};