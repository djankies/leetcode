/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    if (s.length < 2) return s;
    const stack = [];
    
    for (const char of s) {
        const first = stack[stack.length - 1];
        if (first !== char 
            && (first?.toUpperCase() === char 
            || first?.toUpperCase() === char.toUpperCase())) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
};