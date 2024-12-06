/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const len = s.length;
    if (len !== t.length) return false;
    const count = {};
    
    for (let i = 0; i < len; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1;
    }

    for (let i = 0; i < len; i++) {
        if (!count[t[i]]) return false;
        count[t[i]]--;
    }

    return true;
};