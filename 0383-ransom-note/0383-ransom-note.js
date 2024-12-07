/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineLetters = new Map();
    
    for (const letter of magazine) {
        magazineLetters.set(letter,(magazineLetters.get(letter) ?? 0) + 1 );
    }
    
    for (const letter of ransomNote) {
        const count = magazineLetters.get(letter);
        if (!count) return false;
        if (count === 1) magazineLetters.delete(letter);
        else magazineLetters.set(letter, count - 1);
    }
    
    return true;
};