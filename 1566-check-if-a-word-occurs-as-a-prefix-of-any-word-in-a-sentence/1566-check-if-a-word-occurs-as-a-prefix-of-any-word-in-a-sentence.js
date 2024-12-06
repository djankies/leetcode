/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let wordPosition = 1;
    let currentIndex = 0;
    const sentenceLength = sentence.length;
    const searchWordLength = searchWord.length;

    while (currentIndex < sentenceLength) {
        while (sentence[currentIndex] === ' ') {
            currentIndex++;
            wordPosition++;
        }

        let matchCount = 0;
        while (currentIndex < sentenceLength && matchCount < searchWordLength && searchWord[matchCount] === sentence[currentIndex]) {
            matchCount++;
            currentIndex++;
        }

        if (matchCount === searchWordLength) return wordPosition;

        while (currentIndex < sentenceLength && sentence[currentIndex] !== ' ') {
            currentIndex++;
        }
    }

    return -1;

};