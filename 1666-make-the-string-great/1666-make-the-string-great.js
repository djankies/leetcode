/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    if (s.length < 2) return s;
    const stack = [];
    
    for (const char of s) {
        const lastIndex = stack.length - 1;
        const first = stack[lastIndex];
        if (first && first.toUpperCase() === char.toUpperCase() && first !== char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
};