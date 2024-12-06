/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hashMap = new Map();

    for (str of strs) {
        const key = str.split('').sort().join('');
        const previous = hashMap.get(key) ?? [];
        hashMap.set(key, [...previous, str]);
    }

    return [...hashMap.values()]
};