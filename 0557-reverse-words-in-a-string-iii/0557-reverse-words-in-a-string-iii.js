/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(' ');
    return words.map(word => {
        const chars = word.split('');
        let left = 0;
        let right = chars.length - 1;

        while (left < right) {
            const tmp = chars[left];
            chars[left] = chars[right];
            chars[right] = tmp;
            left++;
            right--;
        }

        return chars.join('');
    }).join(' ');
};