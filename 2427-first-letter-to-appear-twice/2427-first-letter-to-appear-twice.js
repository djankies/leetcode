/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const seen = new Set();

    for (c of s) {
        if (seen.has(c)) return c;
        seen.add(c);
    }
};